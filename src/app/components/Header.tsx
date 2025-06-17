"use client";
import * as React from "react";
import NextLink from "next/link";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Container,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const NAV_ITEMS = [
  { label: "Home",      href: "#home" },
  { label: "Work",      href: "#work" },
  { label: "Volunteer", href: "#volunteer" },
  { label: "Awards",    href: "#awards" },
];

export default function Header() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleOpen = (e: React.MouseEvent<HTMLElement>) => setAnchorEl(e.currentTarget);
  const handleClose = () => setAnchorEl(null);

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{ bgcolor: "#e6e7e8" }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            component={NextLink}
            href="#home"
            sx={{
              textDecoration: "none",
              color: "text.primary",
              fontFamily: "Poppins",
              fontWeight: 700,
              flexGrow: { xs: 1, md: 0 },
            }}
          >
            Sejal Agarwal
          </Typography>

          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              ml: "auto",
            }}
          >
            {NAV_ITEMS.map((item) => {
              const isHome = item.href === "#home";
              return (
                <Button
                  key={item.href}
                  component={NextLink}
                  href={isHome ? "#" : item.href}
                  onClick={isHome ? (e) => {
                    e.preventDefault();
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  } : undefined}
                  variant="text"
                  color="inherit"
                  sx={{
                    ml: 2,
                    textTransform: "none",
                    fontFamily: "Poppins",
                    fontSize: "1rem",
                    color: "text.primary",
                  }}
                >
                  {item.label}
                </Button>
              );
            })}
          </Box>

          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              onClick={handleOpen}
              sx={{ color: "text.primary" }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              keepMounted
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              transformOrigin={{ vertical: "top",    horizontal: "right" }}
            >
              {NAV_ITEMS.map((item) => {
                const isHome = item.href === "#home";
                return (
                  <MenuItem
                    key={item.href}
                    component={NextLink}
                    href={isHome ? "#" : item.href}
                    onClick={(e) => {
                      handleClose();
                      if (isHome) {
                        e.preventDefault();
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }
                    }}
                    sx={{ fontFamily: "Poppins", textTransform: "none" }}
                  >
                    {item.label}
                  </MenuItem>
                );
              })}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
