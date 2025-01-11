"use client";

import ExperienceCard from "./ExperienceCard";

export default function Experience() {
  return (
    <div className="w-full flex flex-col gap-4">
      <ExperienceCard
        time="2024 — Present"
        title="IT Analyst (CO-OP)"
        location="Natural Resources Canada"
        description="Developed an intranet application to streamline the moderation and review of survey responses for statisticians in an Agile environment via Azure DevOps to optimize workflows and ensure timely project delivery. Designed a Postgres database schema with Lucidchart, working closely with project managers to meet client needs."
        techstack={["TypeScript", "React", "Next.JS", "Prisma ORM", "TailwindCSS", "NextAuth", "PostgreSQL", "Azure"]}
      />
      <ExperienceCard
        time="2024 — 2024"
        title="Teaching Assistant (Data Structures and Algorithms)"
        location="Carleton University"
        description="Provided weekly in-person office hours and moderated online forums to support over 400 undergraduate students with bi-weekly lab assessments and assisted the professor in reviewing assignments by proof-reading lab specifications and testing submissions to ensure the integrity of the auto-grader."
        techstack={["Java"]}
      />

      <ExperienceCard
        time="2020 — 2024"
        title="Front-End Clerk"
        location="Loblaws Inc."
        description="Worked collaboratively with team members to deliver exceptional customer service in a dynamic and fast-paced environment, enhancing communication skills to ensure customer satisfaction."
        techstack={[]}
      />
    </div>
  );
}
