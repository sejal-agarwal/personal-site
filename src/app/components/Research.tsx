"use client";

import * as React from "react";
import {
  Box,
  Container,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import Image from "next/image";
import researchImage from "../../../public/researcher.svg";

export function Research() {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
      id="research"
      className="fade-in"
      component="section"
      sx={{
        pt: { xs: 6, md: 8 },
        pb: { xs: 6, md: 8 },
        bgcolor: theme.palette.primary.main,
        scrollMarginTop: { xs: "55px", md: "64px" },
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            flexDirection: isSmall ? "column" : "row",
            alignItems: "center",
            gap: 4,
          }}
        >
          {/* Left: illustration */}
          <Box sx={{ flex: "0 0 300px", textAlign: "center" }}>
            <Image
              src={researchImage}
              alt="Research illustration"
              width={300}
              height={300}
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </Box>

          {/* Right: your blurb */}
          <Box sx={{ flex: 1 }}>
            <Typography
              variant="h4"
              component="h2"
              gutterBottom
              sx={{
                fontWeight: 700,
                color: theme.palette.grey[100], // light grey heading
              }}
            >
              Research Interests
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: theme.palette.common.white }} // white body text
            >
              My research interests lie at the intersection of human-computer 
              interaction (HCI), artificial intelligence, and educational technology. 
              I'm passionate about designing AI-driven learning environments that 
              adapt in real time to students' needs, improving engagement and retention. 
              Ultimately, I aim to explore how novel HCI paradigms and machine-learning 
              techniques can support more effective, inclusive, and personalized learning 
              experiences.
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
