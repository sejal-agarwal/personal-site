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
  TimelineDot,
  TimelineOppositeContent,
} from "@mui/lab";
import WorkIcon from "@mui/icons-material/Work";

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
      "Led A/B tests and built analytics dashboards to drive a 20% lift in sign-ups.",
  },
  {
    title: "Software Engineer Co-op",
    company: "Outschool",
    dateRange: "Jan 2024 - Apr 2024",
    description:
      "Led A/B tests and built analytics dashboards to drive a 20% lift in sign-ups.",
  },
  {
    title: "Software Engineer Co-op",
    company: "Open Ocean Robotics",
    dateRange: "May 2023 - Aug 2023",
    description:
      "Migrated 60k LOC from JS to TS, boosted test coverage to 85% and shipped a live-stream carousel feature.",
  },
  {
    title: "Software Engineer Intern",
    company: "Respondent",
    dateRange: "Sept 2022 - Dec 2022",
    description:
      "Implemented new features with 100% unit-test coverage and refactored legacy code to reduce tech-debt.",
  },
  {
    title: "Full Stack Developer",
    company: "19Labs",
    dateRange: "Jan 2022 - May 2022",
    description:
      "Delivered 15 features and resolved 30 issues on the GALE platform using Java, Node.js, and SQL.",
  },
  {
    title: "Junior Technical Analyst",
    company: "Highway Three Solutions",
    dateRange: "May 2021 - Aug 2021",
    description:
      "Led 10 Atlassian cloud migrations and authored 11 technical blog posts.",
  },
];

export function WorkTimeline() {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
      id="work"
      component="section"
      sx={{
        // push the grey band down if you like...
        mt: { xs: 12, md: 12 },
        py: { xs: 4, md: 8 },
        bgcolor: (t) => t.palette.primary.main + "10",
        // on mobile we need a bigger offset, to clear both AppBar any toolbar
        scrollMarginTop: { xs: "55px", md: "64px" },
      }}
    >
      <Container maxWidth="lg">
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
          sx={{ "& .MuiTimelineItem-root:before": { flex: 0, padding: 0 } }}
        >
          {EXPERIENCES.map((exp, i) => {
            const isLeft = !isSmall && i % 2 === 1;
            return (
              <TimelineItem key={i}>
                {/* keep the opposite column empty so our line stays centered */}
                {!isSmall && <TimelineOppositeContent />}

                <TimelineSeparator>
                  {/* only connector below */}
                  <TimelineDot color="primary" sx={{ zIndex: 1 }}>
                    <WorkIcon fontSize="small" />
                  </TimelineDot>
                  {i < EXPERIENCES.length - 1 && <TimelineConnector />}
                </TimelineSeparator>

                <TimelineContent
                  sx={{
                    py: "12px",
                    px: 2,
                    ...(isLeft ? { textAlign: "right" } : {}),
                  }}
                >
                  <Typography variant="h6" color="primary" gutterBottom>
                    {exp.company}
                  </Typography>

                  <Typography
                    variant="subtitle2"
                    color="text.primary"
                    sx={{ fontWeight: 500, mb: 1 }}
                  >
                    Software Engineer Co-op | {exp.dateRange}
                  </Typography>

                  <Typography>{exp.description}</Typography>
                </TimelineContent>
              </TimelineItem>
            );
          })}
        </Timeline>
      </Container>
    </Box>
  );
}
