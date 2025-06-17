"use client";
import * as React from "react";
import Image from "next/image";
import {
  Box,
  Container,
  Typography,
  Button,
} from "@mui/material";
import { WorkTimeline } from "./components/WorkTimeline";

import womanProgrammer from "../../public/womanProgrammer.svg";

export default function About() {
  return (
      <Box
        component="main"
        sx={{
          bgcolor: "background.default",
          minHeight: "100vh",
          py: { xs: 4, md: 8 },
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
                Hi there, I'm Sejal!
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
        <WorkTimeline />
      </Box>
  );
}
