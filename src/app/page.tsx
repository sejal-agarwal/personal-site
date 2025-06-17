"use client";
import * as React from "react";
import Image from "next/image";
import {
  Box,
  Container,
  Typography,
  Button,
  createTheme,
  ThemeProvider,
} from "@mui/material";

import womanProgrammer from "../../public/womanProgrammer.svg";

const theme = createTheme({
  palette: {
    background: { default: "#ffffff" },
    primary:    { main: "#5454c4" },
    secondary:  { main: "#b4b4fc" },
    text:       { primary: "#333333" },
  },
  typography: {
    fontFamily: ["Poppins", "sans-serif"].join(","),
    h1: {
      fontWeight: 700,
      fontSize: "2.25rem",
      lineHeight: 1.2,
      "@media (min-width:600px)": { fontSize: "3rem" },
      "@media (min-width:900px)": { fontSize: "4rem" },
    },
    body1: {
      fontSize: "0.95rem",
      "@media (min-width:600px)": { fontSize: "1.125rem" },
      lineHeight: 1.6,
    },
    button: {
      textTransform: "none",
      fontWeight: 600,
    },
  },
});

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <Box
        component="main"
        sx={{
          bgcolor: "background.default",
          minHeight: "100vh",
          py: { xs: 6, md: 12 },
        }}
      >
        <Container maxWidth="lg">
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column-reverse", md: "row" },
              alignItems: "center",
              gap: { xs: 4, md: 8 },
            }}
          >
            <Box sx={{ flex: 1 }}>
              <Typography variant="h1" color="primary" gutterBottom>
                Hi there, I’m Sejal!
              </Typography>
              <Typography variant="body1" color="text.primary" paragraph>
                I recently graduated with a degree in Software Engineering from
                the University of Victoria and will be pursuing my Master's in
                Computer Science at the University of Waterloo. With leadership
                experience, a love for HCI, and a passion for community service,
                I thrive on crafting creative and beautiful solutions through
                code.
              </Typography>
               <Button
               variant="contained"
               color="secondary"
               size="large"
               sx={{
                 textTransform: "none",
                 fontWeight: 600,
                 display: "block",
                 mx: { xs: "auto", md: 0 },        
                 mt: 2,
               }}
             >
               Contact Me!
             </Button>
            </Box>

            <Box
              sx={{
                flex: 1,
                textAlign: { xs: "center", md: "right" },
              }}
            >
              <Image
                src={womanProgrammer}
                alt="Woman programmer illustration"
                width={500}
                height={400}
                style={{ maxWidth: "100%", height: "auto" }}
              />
            </Box>
          </Box>
        </Container>
      </Box>
    </ThemeProvider>
  );
}
