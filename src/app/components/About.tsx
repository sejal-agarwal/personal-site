"use client";
import * as React from "react";
import Image from "next/image";
import { Box, Button, Container, Typography } from "@mui/material";

import womanProgrammer from "../../../public/womanProgrammer.svg";

export default function About() {
  return (
    <>
      <Box
        className="fade-in"
        component="section"
        id="about"
        sx={{
          bgcolor: "background.default",
          pt: { xs: 6, md: 8 },
          pb: { xs: 6, md: 8 },
        }}
      >
        <Container maxWidth="lg">
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column-reverse", md: "row" },
              alignItems: "center",
              gap: { xs: 2, md: 8 },
            }}
          >
            <Box sx={{ flex: 1 }}>
              <Typography variant="h1" color="primary" gutterBottom>
                Hi there, I'm Sejal!
              </Typography>
              <Typography variant="body1" color="text.primary" paragraph>
                I'm a software engineer and soon-to-be Master's student at the 
                University of Waterloo in Computer Science. I recently graduated 
                with distinction in Software Engineering from the University of 
                Victoria, where my background in mathematics, science, and community 
                service fueled my passion for human-computer interaction, AI, and 
                leadership to find creative solutions through code.
              </Typography>
              <Box
                sx={{
                  mt: 2,
                  width: "100%",
                  display: "flex",
                  justifyContent: { xs: "center", md: "flex-start" },
                }}
              >
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => {
                    const el = document.getElementById("contact");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                    window.history.pushState(null, "", "#contact");
                  }}
                  sx={{
                    fontSize: (theme) => theme.typography.body1.fontSize,
                  }}
                >
                  Contact Me!
                </Button>
              </Box>
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
    </>
  );
}
