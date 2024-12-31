"use client";

import { useState } from "react";
import AboutMe from "./components/AboutMe";

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
      <div className="p-10 pt-20 flex flex-col basis-5/12">
        <div>
          <button
            className={`topic-button hover:text-cyan-500 px-4 py-2 transition-all duration-300 rounded-xl bg-opacity-10 ${
              activeTopic === "About Me" ? "text-cyan-500 bg-white shadow-2xl" : "text-white"
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
            className={`topic-button hover:text-cyan-500 px-4 py-2 transition-all duration-300 rounded-xl bg-opacity-10 ${
              activeTopic === "Experience" ? "text-cyan-500 bg-white shadow-2xl" : "text-white"
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
            className={`topic-button hover:text-cyan-500 px-4 py-2 transition-all duration-300 rounded-xl bg-opacity-10 ${
              activeTopic === "Projects" ? "text-cyan-500 bg-white shadow-2xl" : "text-white"
            }`}
            onClick={() => {
              handleTopicChange("Projects");
            }}
          >
            Projects
          </button>
        </div>
      </div>
      <div className="p-10 pt-20 basis-7/12 relative">
        <div className={`absolute duration-300 transition-all ${activeTopic === "About Me" ? "opacity-100" : "opacity-0"}`}>
          <AboutMe />
        </div>
        <div className={`absolute duration-300 transition-all ${activeTopic === "Experience" ? "opacity-100" : "opacity-0"}`}>Experience</div>
      </div>
    </div>
  );
}
