"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { HiMenu, HiX } from "react-icons/hi";
import AboutMe from "./components/AboutMe";
import Experience from "./Experience";
import Projects from "./Projects";

export default function Details({ isIntroHidden = false }: { isIntroHidden?: boolean }) {
  const [activeTopic, setActiveTopic] = useState("About Me");
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  function handleMouseMove(event: React.MouseEvent<HTMLDivElement>) {
    setMousePosition({
      x: event.clientX,
      y: event.clientY,
    });
  }

  function handleTopicChange(topic: string) {
    setActiveTopic(topic);
    setIsMobileMenuOpen(false); // Close mobile menu when tab is selected
  }

  return (
    <div
      className="h-screen w-full lg:px-[20%] px-[5%] flex text-gray-500 relative"
      style={{ background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, #051e2e, #030712)` }}
      onMouseMove={handleMouseMove}
    >
      {/* Hamburger button - visible on mobile only, and only when intro is hidden */}
      {isIntroHidden && (
        <button
          className="lg:hidden fixed top-6 left-1/2 -translate-x-1/2 z-50 text-white hover:text-cyan-500 transition-colors duration-300 p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <HiX className="w-8 h-8" /> : <HiMenu className="w-8 h-8" />}
        </button>
      )}

      {/* Mobile menu overlay */}
      {isMobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/80 backdrop-blur-sm z-40 flex items-center justify-center"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="bg-gray-900/95 rounded-2xl p-8 shadow-2xl border border-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col gap-4">
              <button
                className={`hover:text-cyan-500 px-6 py-3 transition-all duration-300 rounded-xl cursor-pointer text-lg ${
                  activeTopic === "About Me" ? "text-cyan-500 bg-white/10 shadow-2xl" : "text-white"
                }`}
                onClick={() => handleTopicChange("About Me")}
              >
                About Me
              </button>
              <button
                className={`hover:text-cyan-500 px-6 py-3 transition-all duration-300 rounded-xl cursor-pointer text-lg ${
                  activeTopic === "Experience" ? "text-cyan-500 bg-white/10 shadow-2xl" : "text-white"
                }`}
                onClick={() => handleTopicChange("Experience")}
              >
                Experience
              </button>
              <button
                className={`hover:text-cyan-500 px-6 py-3 transition-all duration-300 rounded-xl cursor-pointer text-lg ${
                  activeTopic === "Projects" ? "text-cyan-500 bg-white/10 shadow-2xl" : "text-white"
                }`}
                onClick={() => handleTopicChange("Projects")}
              >
                Projects
              </button>
            </div>
          </motion.div>
        </div>
      )}

      {/* Desktop sidebar - hidden on mobile */}
      <div className="hidden lg:flex m-10 mt-20 flex-col basis-3/12 justify-between pb-12">
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
          {/* <div>
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
          </div> */}
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
      <div
        className="m-10 mt-24 lg:mt-20 lg:basis-9/12 w-full lg:w-auto relative overflow-scroll overflow-y-scroll no-scrollbar"
        style={{ scrollbarGutter: "stable" }}
      >
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
        {/* <motion.div
          className="w-full absolute"
          animate={{
            opacity: activeTopic === "Skills" ? 1 : 0,
            pointerEvents: activeTopic === "Skills" ? "auto" : "none",
            visibility: activeTopic === "Skills" ? "visible" : "hidden",
          }}
          transition={{ duration: 1, type: "spring" }}
        >
          coming soon...
        </motion.div> */}
      </div>
    </div>
  );
}
