"use client";

import { useState } from "react";
import { motion } from "motion/react";
import AboutMe from "./components/AboutMe";
import Experience from "./Experience";
import Projects from "./Projects";

export default function Details() {
  const [activeTopic, setActiveTopic] = useState("About Me");
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  function handleMouseMove(event: React.MouseEvent<HTMLDivElement>) {
    setMousePosition({
      x: event.clientX,
      y: event.clientY,
    });
  }

  function handleTopicChange(topic: string) {
    setActiveTopic(topic);
  }

  return (
    <div
      className="h-screen w-full lg:px-[20%] px-[5%] flex text-gray-500"
      style={{ background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, #051e2e, #030712)` }}
      onMouseMove={handleMouseMove}
    >
      <div className="m-10 mt-20 flex flex-col basis-3/12 justify-between pb-12">
        <div className="flex flex-col">
          <div>
            <button
              className={`hover:text-cyan-500 px-4 py-2 transition-all duration-300 rounded-xl cursor-pointer ${
                activeTopic === "About Me" ? "text-cyan-500 bg-white/10 shadow-2xl" : "text-white"
              }`}
              onClick={() => {
                handleTopicChange("About Me");
              }}
            >
              About Me
            </button>
          </div>
          <div>
            <button
              className={`hover:text-cyan-500 px-4 py-2 transition-all duration-300 rounded-xl cursor-pointer ${
                activeTopic === "Experience" ? "text-cyan-500 bg-white/10 shadow-2xl" : "text-white"
              }`}
              onClick={() => {
                handleTopicChange("Experience");
              }}
            >
              Experience
            </button>
          </div>
          <div>
            <button
              className={`hover:text-cyan-500 px-4 py-2 transition-all duration-300 rounded-xl cursor-pointer ${
                activeTopic === "Projects" ? "text-cyan-500 bg-white/10 shadow-2xl" : "text-white"
              }`}
              onClick={() => {
                handleTopicChange("Projects");
              }}
            >
              Projects
            </button>
          </div>
          <div>
            <button
              className={`hover:text-cyan-500 px-4 py-2 transition-all duration-300 rounded-xl cursor-pointer ${
                activeTopic === "Skills" ? "text-cyan-500 bg-white/10 shadow-2xl" : "text-white"
              }`}
              onClick={() => {
                handleTopicChange("Skills");
              }}
            >
              Skills
            </button>
          </div>
        </div>
        <div className="flex gap-4 pl-2">
          <a href="https://www.linkedin.com/in/jasonwang1123/" target="_blank">
            <i className="bi bi-linkedin text-3xl" />
          </a>
          <a href="https://github.com/Jason-Wang1245" target="_blank">
            <i className="bi bi-github text-3xl" />
          </a>
          <a href="mailto:jasonwang1245@gamil.com" target="_blank">
            <i className="bi bi-envelope-at-fill text-3xl" />
          </a>
        </div>
      </div>
      <div className="m-10 mt-20 basis-9/12 relative overflow-scroll overflow-y-scroll no-scrollbar" style={{ scrollbarGutter: "stable" }}>
        <motion.div
          className="w-full absolute"
          animate={{
            opacity: activeTopic === "About Me" ? 1 : 0,
            pointerEvents: activeTopic === "About Me" ? "auto" : "none",
            visibility: activeTopic === "About Me" ? "visible" : "hidden",
          }}
          transition={{ duration: 1, type: "spring" }}
        >
          <AboutMe />
        </motion.div>
        <motion.div
          className="w-full absolute"
          animate={{
            opacity: activeTopic === "Experience" ? 1 : 0,
            pointerEvents: activeTopic === "Experience" ? "auto" : "none",
            visibility: activeTopic === "Experience" ? "visible" : "hidden",
          }}
          transition={{ duration: 1, type: "spring" }}
        >
          <Experience />
        </motion.div>
        <motion.div
          className="w-full absolute"
          animate={{
            opacity: activeTopic === "Projects" ? 1 : 0,
            pointerEvents: activeTopic === "Projects" ? "auto" : "none",
            visibility: activeTopic === "Projects" ? "visible" : "hidden",
          }}
          transition={{ duration: 1, type: "spring" }}
        >
          <Projects />
        </motion.div>
        <motion.div
          className="w-full absolute"
          animate={{
            opacity: activeTopic === "Skills" ? 1 : 0,
            pointerEvents: activeTopic === "Skills" ? "auto" : "none",
            visibility: activeTopic === "Skills" ? "visible" : "hidden",
          }}
          transition={{ duration: 1, type: "spring" }}
        >
          coming soon...
        </motion.div>
      </div>
    </div>
  );
}
