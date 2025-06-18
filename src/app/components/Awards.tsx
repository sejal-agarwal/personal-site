"use client";

import * as React from "react";
 import {
   Box,
   Container,
   Typography,
   Paper,
   useTheme,
 } from "@mui/material";
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
    description: "Recognized emerging female technologists for innovation.",
  },
  {
    name: "Mastercard Award in Cyber Security",
    amount: "$15,000",
    year: "2022",
    description: "Honored top student research in securing digital payments.",
  },
  {
    name: "Maurice William Summerhayes Memorial Scholarship",
    amount: "$40,000",
    year: "2020",
    description: "Awarded for academic excellence in Software Engineering.",
  },
  {
    name: "BC Achievement Scholarship",
    amount: "$1,250",
    year: "2020",
    description: "Provincial award for outstanding grades and leadership.",
  },
  {
    name: "Donald & Evelyn Munro Scholarships",
    amount: "$1,250",
    year: "2020",
    description: "Support for students demonstrating community service.",
  },
  {
    name: "Pacific Leaders Scholarship for Public Servants",
    amount: "$1,250",
    year: "2020",
    description: "For students committed to public service careers.",
  },
  {
    name: "District Authority Award",
    amount: "$1,250",
    year: "2020",
    description: "Recognized leadership in district-wide student initiatives.",
  },
  {
    name: "Victoria's Principal & Vice Principal's Association Scholarship",
    amount: "$500",
    year: "2019",
    description: "Awarded to top academic achievers in Victoria schools.",
  },
];

export function Awards() {
  const theme = useTheme();

  return (
    <Box
      id="awards"
      component="section"
      sx={{
        py: { xs: 8, md: 12 },
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="h4" gutterBottom sx={{ fontWeight: 700 }}>
          Awards & Scholarships
        </Typography>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
            gap: 4,
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
                <Typography variant="subtitle1" fontWeight={500}>
                  {award.name}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ mb: 0.5 }}
                >
                  {award.amount
                    ? `${award.amount} | ${award.year}`
                    : award.year}
                </Typography>
                <Typography variant="body2">
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
