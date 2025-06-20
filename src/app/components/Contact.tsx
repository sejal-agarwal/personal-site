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
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={4}
          alignItems={{ xs: "flex-start", sm: "center" }}
        >
          {/* Email */}
          <Stack direction="row" spacing={2} alignItems="center">
            <EmailIcon color="primary" sx={{ mr: 0 }} />
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

          {/* Phone */}
          <Stack direction="row" spacing={2} alignItems="center">
            <PhoneIcon color="primary" sx={{ mr: 0 }} />
            <Link
              href="tel:+12508181343"
              underline="hover"
              color="text.primary"
              sx={{ fontWeight: 500 }}
            >
              <Typography variant="body1">(250)-818-1343</Typography>
            </Link>
          </Stack>

          {/* LinkedIn */}
          <Stack direction="row" spacing={2} alignItems="center">
            <LinkedInIcon color="primary" sx={{ mr: 0 }} />
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
      </Container>
    </Box>
  );
}
