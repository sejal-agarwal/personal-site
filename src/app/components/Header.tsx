"use client";
import * as React from "react";
import NextLink from "next/link";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Tabs,
  Tab,
  Container,
} from "@mui/material";

const NAV_ITEMS = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Volunteer", href: "#volunteer" },
  { label: "Awards", href: "#awards" },
];

export default function Header() {
  const [current, setCurrent] = React.useState(0);

  const handleChange = (evt: React.SyntheticEvent, value: number) => {
    setCurrent(value);
    if (NAV_ITEMS[value].href === "#about") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      document
        .querySelector(NAV_ITEMS[value].href)!
        .scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <AppBar position="sticky" elevation={0} sx={{ bgcolor: "#e6e7e8" }}>
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            component={NextLink}
            href="#about"
            sx={{
              display: { xs: "none", md: "block" },
              textDecoration: "none",
              color: "text.primary",
              fontFamily: "Poppins",
              fontWeight: 700,
            }}
          >
            Sejal Agarwal
          </Typography>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "flex-end",
              mr: 4,
            }}
          >
            {/* ——— Desktop tabs ——— */}
            {NAV_ITEMS.map((item) => (
              <Button
                key={item.href}
                component={NextLink}
                href={item.href}
                onClick={(e) => {
                  if (item.href === "#about") {
                    e.preventDefault();
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }
                }}
                variant="text"
                color="inherit"
                sx={{
                  ml: 2,
                  textTransform: "none",
                  fontFamily: "Poppins",
                  fontSize: "1rem",
                  fontWeight: 500,
                  color: "text.primary",
                }}
              >
                {item.label}
              </Button>
            ))}
          </Box>

          {/* ——— Mobile tabs ——— */}
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <Tabs
              value={current}
              onChange={handleChange}
              variant="standard"
              centered
              sx={{
                "& .MuiTabs-flexContainer": {
                  justifyContent: "center",
                  px: { xs: 2, sm: 4 },
                },
                "& .MuiTab-root": {
                  minWidth: 72,
                  textTransform: "none",
                  fontFamily: "Poppins",
                  fontWeight: 500,
                  color: (theme) => theme.palette.text.primary,
                  "&.Mui-selected": {
                    color: (theme) => theme.palette.primary.main,
                  },
                },
                "& .MuiTabs-indicator": {
                  backgroundColor: (theme) => theme.palette.primary.main,
                },
              }}
            >
              {NAV_ITEMS.map((item) => (
                <Tab key={item.href} label={item.label} />
              ))}
            </Tabs>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
