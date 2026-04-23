"use client";

import { useEffect, useState } from "react";
import { LEFT_LOGOS, RIGHT_LOGOS } from "../data/logos";
import About from "./About";
import Activity from "./Activity";
import Contact from "./Contact";
import Hero from "./Hero";
import LogoColumn from "./LogoColumn";
import Nav from "./Nav";
import Projects from "./Projects";
import Sphere from "./Sphere";
import TweaksPanel from "./TweaksPanel";

export default function Portfolio() {
  const [scrollY, setScrollY] = useState(0);
  const [showTweaks, setShowTweaks] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onMessage = (e: MessageEvent) => {
      if (e.data?.type === "__activate_edit_mode") setShowTweaks(true);
      if (e.data?.type === "__deactivate_edit_mode") setShowTweaks(false);
    };
    window.addEventListener("message", onMessage);
    window.parent.postMessage({ type: "__edit_mode_available" }, "*");
    return () => window.removeEventListener("message", onMessage);
  }, []);

  return (
    <div className="relative min-h-screen bg-ink">
      <Sphere />
      <LogoColumn
        side="left"
        items={LEFT_LOGOS}
        scrollY={scrollY}
        parallax={0.35}
        topOffset={100}
      />
      <LogoColumn
        side="right"
        items={RIGHT_LOGOS}
        scrollY={scrollY}
        parallax={0.28}
        topOffset={160}
      />
      <Nav scrollY={scrollY} />
      <main className="relative z-[2] mx-auto max-w-[640px] px-[120px]">
        <Hero />
        <About />
        <Projects />
        <Activity />
        <Contact />
      </main>
      <TweaksPanel visible={showTweaks} />
    </div>
  );
}
