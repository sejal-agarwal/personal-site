"use client";

import * as React from "react";
import { Box, Container, Typography, Paper, useTheme } from "@mui/material";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";

interface Award {
  name: string;
  amount: string | null;
  year: string;
  description: string;
}

const AWARDS: Award[] = [
  {
    name: "Bit Quill Technologies Scholarship for Women",
    amount: "$806",
    year: "2023",
    description:
      "Awarded to women in UVic's Software Engineering programs for academic excellence and leadership.",
  },
  {
    name: "Mastercard Award in Cyber Security",
    amount: "$15,000",
    year: "2022",
    description:
      "Honors UVic students who excel in cybersecurity research and coursework.",
  },
  {
    name: "Maurice William Summerhayes Memorial Scholarship",
    amount: "$40,000",
    year: "2020",
    description:
      "Given to incoming UVic engineering students with outstanding academic records.",
  },
  {
    name: "BC Achievement Scholarship",
    amount: "$1,250",
    year: "2020",
    description:
      "Provincial scholarship awarded to top BC high-school graduates based on their grades.",
  },
  {
    name: "Donald & Evelyn Munro Scholarships",
    amount: "$1,250",
    year: "2020",
    description:
      "Entrance scholarship for Victoria-area students entering UVic, based on academic merit.",
  },
  {
    name: "Pacific Leaders Scholarship for Public Servants",
    amount: "$1,250",
    year: "2020",
    description:
      "Awarded to children of BC public servants for strong academic achievement and service commitment.",
  },
  {
    name: "District Authority Award",
    amount: "$1,250",
    year: "2020",
    description:
      "Provincial scholarship recognizing Grade 12 graduates for excellence in a chosen field.",
  },
  {
    name: "Victoria's Principal & Vice-Principal's Association Scholarship",
    amount: "$500",
    year: "2019",
    description:
      "Presented to Victoria public-school graduates for academic excellence and leadership.",
  },
];

export function Awards() {
  const theme = useTheme();

  return (
    <Box
      className="fade-in"
      id="awards"
      component="section"
      sx={{
        pt: { xs: 6, md: 8 },
        pb: { xs: 6, md: 8 },
        scrollMarginTop: { xs: "55px", md: "64px" },
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="h4" sx={{ fontWeight: 700 }} gutterBottom>
          Awards
        </Typography>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
            gap: 2,
          }}
        >
          {AWARDS.map((award, i) => (
            <Paper
              key={i}
              elevation={0}
              sx={{
                display: "flex",
                alignItems: "flex-start",
                bgcolor: "transparent",
                p: 1,
              }}
            >
              <EmojiEventsIcon
                sx={{
                  mr: 2,
                  mt: "4px",
                  color: theme.palette.primary.main,
                }}
              />

              <Box>
                <Typography variant="h6" color="primary" gutterBottom>
                  {award.name}
                </Typography>
                <Typography
                  variant="subtitle2"
                  color="text.primary"
                  sx={{ fontWeight: 500 }}
                  gutterBottom
                >
                  {award.amount
                    ? `${award.amount} | ${award.year}`
                    : award.year}
                </Typography>
                <Typography variant="body1" sx={{ mb: 1 }}>
                  {award.description}
                </Typography>
              </Box>
            </Paper>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
