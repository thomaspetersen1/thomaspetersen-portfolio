export type Project = {
  title: string;
  desc: string;
  tags: string[];
  github?: string;
  demo?: string;
};

export const PROJECTS: Project[] = [
  {
    title: "Project Alpha",
    desc: "Brief description of what this project does and the problem it solves.",
    tags: ["React", "Node.js", "PostgreSQL"],
    github: "#",
    demo: "#",
  },
  {
    title: "Project Beta",
    desc: "Another project — hackathon winner or something else notable goes here.",
    tags: ["Python", "ML", "FastAPI"],
    github: "#",
  },
  {
    title: "Project Gamma",
    desc: "A third project worth highlighting. Swap in real descriptions.",
    tags: ["TypeScript", "AWS", "Docker"],
    github: "#",
    demo: "#",
  },
];
