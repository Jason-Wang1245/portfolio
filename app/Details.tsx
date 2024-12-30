"use client";

import { useState } from "react";
import AboutMe from "./components/AboutMe";

export default function Details() {
  const [activeTopic, setActiveTopic] = useState("About Me");

  function handleTopicChange(topic: string) {
    setActiveTopic(topic);
  }

  return (
    <div className="h-screen w-full lg:px-[20%] px-[5%] flex text-gray-500">
      <div className="p-10 pt-20 flex flex-col basis-5/12">
        <div>
          <button
            className={`topic-button hover:text-cyan-500 px-4 py-2 transition-all duration-300 ${
              activeTopic === "About Me" ? "text-cyan-500" : "text-white"
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
            className={`topic-button hover:text-cyan-500 px-4 py-2 transition-all duration-300 ${
              activeTopic === "Experience" ? "text-cyan-500" : "text-white"
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
            className={`topic-button hover:text-cyan-500 px-4 py-2 transition-all duration-300 ${
              activeTopic === "Projects" ? "text-cyan-500" : "text-white"
            }`}
            onClick={() => {
              handleTopicChange("Projects");
            }}
          >
            Projects
          </button>
        </div>
      </div>
      <div className={`p-10 pt-20 basis-7/12 transition-opacity ${activeTopic === "About Me" ? "block opacity-100" : "hidden opacity-0"}`}>
        <AboutMe />
      </div>
    </div>
  );
}
