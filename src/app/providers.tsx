"use client";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import React from "react";
import { useFadeOnScroll } from "./hooks/useFadeOnScroll";

const palette = {
  mode: "light" as const,
  background: { default: "#ffffff" },
  primary:    { main: "#5454c4" },
  secondary:  { main: "#b4b4fc" },
  text:       { primary: "#333333" },
};

const typography = {
  fontFamily: ["Poppins","sans-serif"].join(","),
  h1: {
    fontFamily: ["Poppins","sans-serif"].join(","),
    fontWeight: 700,
    lineHeight: 1.2,
    fontSize: "2.25rem",
    "@media (min-width:600px)": { fontSize: "3rem" },
    "@media (min-width:900px)": { fontSize: "4rem" },
  },
  body1: {
    fontSize: "0.95rem",
    lineHeight: 1.6,
    "@media (min-width:600px)": { fontSize: "1.125rem" },
  },
  button: {
    textTransform: "none" as const,
    fontWeight: 600,
  },
};

const theme = createTheme({ palette, typography });

export function Providers({ children }: { children: React.ReactNode }) {
  useFadeOnScroll();
  return <ThemeProvider theme={theme}><CssBaseline />{children}</ThemeProvider>;
}