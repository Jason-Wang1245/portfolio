"use client";

export default function AboutMe() {
  return (
    <div className="transition-all">
      <div className="text-gray-400">
        <i className="bi bi-geo-alt-fill mr-1" />
        Canada, Ontario
      </div>
      <br />
      <div>
        I am currently pursuing a Bachelor&apos;s degree in Computer Science with a focus on Software Engineering at{" "}
        <span className="text-gray-300">Carleton University</span>, while also working towards a minor in Statistics.
        <br />
        <br />
        In addition to my academic pursuits, I work as an IT Analyst at <span className="text-gray-300">Natural Resources Canada</span>, specializing
        in web development. My division focuses on the collection and analysis of mining and mineral statistics, presenting these insights through
        web-based visualizations. I contribute to the team by applying my web development expertise and providing technical support wherever needed.
        <br />
        <br />
        Outside of work and studies, I enjoy building my own web applications to address everyday challenges. I also have a passion for 3D modelling,
        fitness, and gaming.
      </div>
    </div>
  );
}
