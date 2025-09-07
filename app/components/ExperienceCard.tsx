"use client";

export default function ExperienceCard({
  time,
  title,
  location,
  description,
  techstack,
}: {
  time: string;
  title: string;
  location: string;
  description: string;
  techstack: string[];
}) {
  return (
    <div className="bg-white/5 hover:bg-white/10 transition-all w-full p-5 rounded-lg shadow-2xl flex cursor-default">
      <div className="basis-3/12 text-xs">{time}</div>
      <div className="basis-9/12">
        <h2 className="text-gray-300">{title}</h2>
        <h3 className="text-gray-400 mb-1 text-opacity-80">{location}</h3>
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
}
