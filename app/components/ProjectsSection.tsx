'use client';

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const projects = [
  {
    title: "ML Portfolio Site",
    description: "A sleek portfolio built with Next.js, Tailwind, and shadcn/ui.",
  },
  {
    title: "Air Quality Analysis",
    description: "Exploratory data analysis & visualization on pollution data using R.",
  },
  {
    title: "Titanic Survival Predictor",
    description: "Machine learning model to predict survival on the Titanic.",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, idx) => (
          <Card key={idx} className="bg-zinc-900 text-white border-zinc-700">
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
              <CardDescription className="text-zinc-400">{project.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-zinc-300">More features or links can go here.</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
