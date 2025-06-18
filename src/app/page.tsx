"use client";
import * as React from "react";
import { WorkTimeline } from "./components/WorkTimeline";
import { Awards } from "./components/Awards";

import { Contact } from "./components/Contact";
import About from "./components/About";

export default function Page() {
  return (
    <>
      <About/>
        <WorkTimeline />
        <Awards />
      <Contact />
    </>
  );
}
