"use client";

import * as React from "react";
import {
  Box,
  Container,
  Typography,
  Link,
  Stack,
  useTheme,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export function Contact() {
  const theme = useTheme();

  return (
    <Box
    className="fade-in"
      component="footer"
      id="contact"
      sx={{
        bgcolor: theme.palette.primary.main + "10",
        py: { xs: 4, md: 8 },
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="h4" gutterBottom sx={{ fontWeight: 700 }}>
          Contact Me!
        </Typography>

        <Box sx={{ pl: 1 }}>
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={4}
            alignItems={{ xs: "flex-start", sm: "center" }}
          >
            <Stack direction="row" spacing={1} alignItems="center">
              <EmailIcon color="primary" />
              <Link
                href="mailto:sejalagarwal321@gmail.com"
                underline="hover"
                color="text.primary"
                sx={{ fontWeight: 500 }}
              >
                <Typography variant="body1">
                  sejalagarwal321@gmail.com
                </Typography>
              </Link>
            </Stack>
            <Stack direction="row" spacing={1} alignItems="center">
              <PhoneIcon color="primary" />
              <Link
                href="tel:+12508181343"
                underline="hover"
                color="text.primary"
                sx={{ fontWeight: 500 }}
              >
                <Typography variant="body1">(250)-818-1343</Typography>
              </Link>
            </Stack>
            <Stack direction="row" spacing={1} alignItems="center">
              <LinkedInIcon color="primary" />
              <Link
                href="https://www.linkedin.com/in/sejal-agarwal-132572205/"
                target="_blank"
                rel="noopener"
                underline="hover"
                color="text.primary"
                sx={{ fontWeight: 500 }}
              >
                <Typography variant="body1">
                  linkedin.com/in/sejal-agarwal
                </Typography>
              </Link>
            </Stack>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}
