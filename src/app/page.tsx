"use client";
import * as React from "react";
import { WorkTimeline } from "./components/WorkTimeline";
import { Awards } from "./components/Awards";

import { Contact } from "./components/Contact";
import About from "./components/About";
import { Research } from "./components/Research";

export default function Page() {
  return (
    <>
      <About/>
      <Research />
        <WorkTimeline />
        <Awards />
      <Contact />
    </>
  );
}
