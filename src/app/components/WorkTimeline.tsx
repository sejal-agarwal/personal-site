"use client";

import * as React from "react";
import {
  Box,
  Container,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineOppositeContent,
  TimelineDot,
} from "@mui/lab";
import WorkIcon from "@mui/icons-material/Work";
import { motion, useScroll, useTransform } from "framer-motion";

interface Experience {
  title: string;
  company: string;
  dateRange: string;
  description: string;
}

const EXPERIENCES: Experience[] = [
  {
    title: "Software Engineer Co-op",
    company: "Outschool",
    dateRange: "Sept 2024 - Dec 2024",
    description:
      "Designed and ran A/B tests on core onboarding flows and built interactive analytics dashboards, driving a 20% lift in new buyer engagement and sign-ups.",
  },
  {
    title: "Software Engineer Co-op",
    company: "Outschool",
    dateRange: "Jan 2024 - Apr 2024",
    description:
      "Partnered with product and data teams to analyze experiment results, optimize UI/UX, and deliver data-driven recommendations.",
  },
  {
    title: "Software Engineer Co-op",
    company: "Open Ocean Robotics",
    dateRange: "May 2023 - Aug 2023",
    description:
      "Migrated 60,000+ lines of code from JavaScript to TypeScript to improve code robustness and shipped a live-stream image carousel for Unmanned Surface Vehicles, reducing operational costs.",
  },
  {
    title: "Software Engineer Intern",
    company: "Respondent",
    dateRange: "Sept 2022 - Dec 2022",
    description:
      "Implemented five new platform features with 100% unit-test coverage and refactored 20% of legacy code, reducing technical debt and enhancing maintainability.",
  },
  {
    title: "Full Stack Developer (Co-op)",
    company: "19Labs",
    dateRange: "Jan 2022 - May 2022",
    description:
      "Delivered 15 new features and resolved 30 issues on a telehealth platform using Java, Node.js, Kotlin, and SQL, enabling seamless remote patient care.",
  },
  {
    title: "Junior Technical Analyst (Co-op)",
    company: "Highway Three Solutions",
    dateRange: "May 2021 - Aug 2021",
    description:
      "Led cloud migrations for 10 Atlassian apps and authored 11 technical blog posts, streamlining team onboarding and knowledge sharing.",
  },
];

const MotionDot = motion(TimelineDot);

export function WorkTimeline() {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("md"));

  const sectionRef = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start center", "end center"],
  });
  const fillProgress = useTransform(scrollYProgress, [0, 1], [0, 1], {
    clamp: true,
  });

  const dotRefs = React.useRef<Array<HTMLElement | null>>([]);
  const [barTop, setBarTop] = React.useState(0);
  const [barHeight, setBarHeight] = React.useState(0);
  const [trackX, setTrackX] = React.useState(0);

  React.useEffect(() => {
    const sec = sectionRef.current;
    if (!sec) return;
    const topOff = sec.getBoundingClientRect().top + window.scrollY;
    const centers = dotRefs.current.map((el) => {
      if (!el) return 0;
      const r = el.getBoundingClientRect();
      return r.top + window.scrollY - topOff + r.height / 2;
    });
    if (centers.length) {
      const dotRadius =
        (dotRefs.current[0]?.getBoundingClientRect().height ?? 40) / 2;
      setBarTop(centers[0]);
      setBarHeight(centers[centers.length - 1] - centers[0] + dotRadius);
    }
  }, [isSmall]);

  React.useEffect(() => {
    const sec = sectionRef.current;
    if (!sec) return;
    const secLeft = sec.getBoundingClientRect().left + window.scrollX;
    const firstDot = dotRefs.current[0];
    if (firstDot) {
      const r = firstDot.getBoundingClientRect();
      const centerX = r.left + r.width / 2 - secLeft;
      setTrackX(centerX);
    }
  }, [isSmall, barTop, barHeight]);

  const [activeDots, setActiveDots] = React.useState<boolean[]>([]);
  React.useEffect(() => {
    return fillProgress.onChange((p) => {
      const fh = barHeight * p;
      setActiveDots(
        dotRefs.current.map((el) => {
          if (!el) return false;
          const sec = sectionRef.current!;
          const containerTop = sec.getBoundingClientRect().top + window.scrollY;
          const r = el.getBoundingClientRect();
          const centerY =
            r.top + window.scrollY - containerTop + r.height / 2 - barTop;
          return centerY <= fh;
        })
      );
    });
  }, [fillProgress, barTop, barHeight]);

  return (
    <Box
      ref={sectionRef}
      className="fade-in"
      component="section"
      id="work"
      sx={{
        position: "relative",
        pt: { xs: 6, md: 8 },
        pb: { xs: 6, md: 8 },
        bgcolor: (t) => t.palette.primary.main + "10",
        scrollMarginTop: { xs: "55px", md: "64px" },
      }}
    >
      {/* grey track */}
      <Box
        sx={{
          position: "absolute",
          top: barTop,
          left: isSmall ? `${trackX - 1}px` : "50%",
          transform: isSmall ? "none" : "translateX(-50%)",
          width: 2,
          height: barHeight,
          bgcolor: theme.palette.grey[300],
          zIndex: 0,
        }}
      />

      {/* purple fill */}
      <motion.div
        initial={{ scaleY: 0 }}
        style={{
          position: "absolute",
          top: barTop,
          left: isSmall ? `${trackX - 1}px` : "calc(50% - 1px)",
          width: 2,
          height: barHeight,
          backgroundColor: theme.palette.primary.main,
          transformOrigin: "top",
          scaleY: fillProgress,
          zIndex: 1,
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2 }}>
        <Typography
          variant="h4"
          component="h2"
          gutterBottom
          sx={{ fontWeight: 700 }}
        >
          Work Experience
        </Typography>

        <Timeline
          position={isSmall ? "right" : "alternate"}
          sx={{
            "& .MuiTimelineItem-root:before": { display: "none" },
            "& .MuiTimelineConnector-root": { bgcolor: "transparent" },
          }}
        >
          {EXPERIENCES.map((exp, i) => {
            const isLeft = !isSmall && i % 2 === 1;
            return (
              <TimelineItem key={i}>
                {!isSmall && <TimelineOppositeContent />}

                <TimelineSeparator>
                  <MotionDot
                    ref={(el) => {
                      if (el) dotRefs.current[i] = el as HTMLElement;
                    }}
                    animate={{
                      backgroundColor: activeDots[i]
                        ? theme.palette.primary.main
                        : theme.palette.background.paper,
                      color: activeDots[i]
                        ? theme.palette.background.paper
                        : theme.palette.primary.main,
                    }}
                    color="inherit"
                    sx={{ zIndex: 2 }}
                  >
                    <WorkIcon fontSize="small" />
                  </MotionDot>

                  {i < EXPERIENCES.length - 1 && <TimelineConnector />}
                </TimelineSeparator>

                <TimelineContent
                  sx={{
                    py: "12px",
                    px: 2,
                    ...(isLeft && { textAlign: "right" }),
                  }}
                >
                  <Typography variant="h6" color="primary" gutterBottom>
                    {exp.company}
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    color="text.primary"
                    sx={{ fontWeight: 500 }}
                    gutterBottom
                  >
                    {exp.title} | {exp.dateRange}
                  </Typography>
                  <Typography paragraph>{exp.description}</Typography>
                </TimelineContent>
              </TimelineItem>
            );
          })}
        </Timeline>
      </Container>
    </Box>
  );
}
