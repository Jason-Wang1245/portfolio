"use client";

import ProjectCard from "./components/ProjectCard";

export default function Projects() {
  return (
    <div className="w-full flex flex-col gap-4">
      <ProjectCard
        title="Shortcut"
        link="https://chromewebstore.google.com/detail/shortcut/agaljlaobhhjolokonmpkeljacddaicg?authuser=0&hl=en"
        description="Chrome extension that allows users to store, organize, and quickly access their web bookmarks for improved browsing efficiency."
        techstack={["React", "Vite", "Shadcn", "TailwindCSS", "manifest.json"]}
      />
    </div>
  );
}
