"use client";

import { LuExternalLink } from "react-icons/lu";

export default function ProjectCard({
  title,
  link,
  description,
  techstack,
}: {
  title: string;
  link?: string;
  description: string;
  techstack: string[];
}) {
  const CardContent = (
    <div
      className={`bg-white/5 hover:bg-white/10 transition-all w-full p-5 rounded-lg shadow-2xl flex cursor-default ${link ? "cursor-pointer" : ""}`}
    >
      <div>
        <h2 className="text-gray-300 flex gap-0.5 mb-1">
          {title}
          {link && <LuExternalLink />}
        </h2>
        <p className="text-sm mb-2">{description}</p>
        <div className="flex gap-2 text-xs flex-wrap">
          {techstack.map((tech) => (
            <div key={tech} className="bg-cyan-800/50 text-cyan-300 rounded-3xl py-1 px-2">
              {tech}
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  if (link)
    return (
      <a href={link} target="_blank">
        {CardContent}
      </a>
    );
  else return CardContent;
}
