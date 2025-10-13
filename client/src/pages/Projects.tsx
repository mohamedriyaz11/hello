import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Projects() {
  const projects = [
    {
      title: "Big Data Analytics Platform",
      description: "Developed a scalable platform for analyzing large-scale datasets using Hadoop and Spark ecosystems.",
      status: "Completed",
      technologies: ["Hadoop", "Spark", "Python", "Machine Learning"],
    },
    {
      title: "Predictive Maintenance System",
      description: "AI-driven system for predicting equipment failures in manufacturing environments.",
      status: "Ongoing",
      technologies: ["Deep Learning", "IoT", "Cloud Computing"],
    },
    {
      title: "Healthcare Data Mining",
      description: "Research project on extracting insights from healthcare data to improve patient outcomes.",
      status: "Completed",
      technologies: ["Data Mining", "R", "Statistics"],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <div className="container mx-auto px-4 lg:px-8 py-16">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4" data-testid="text-projects-heading">
            Projects
          </h1>
          <p className="text-lg text-muted-foreground mb-12">
            Current and completed research projects
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Card key={index} className="p-6 hover-elevate flex flex-col" data-testid={`card-project-${index}`}>
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-semibold">{project.title}</h3>
                    <Badge variant={project.status === "Ongoing" ? "default" : "secondary"}>
                      {project.status}
                    </Badge>
                  </div>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
                <Button variant="outline" className="w-full gap-2" data-testid={`button-view-project-${index}`}>
                  View Details
                  <ExternalLink className="h-4 w-4" />
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </main>
      <Footer
        professorName="Dr. S. Neelakandan"
        institution="R.M.K. Engineering College"
        email="drsnk730@gmail.com"
        linkedin="https://linkedin.com"
        youtube="https://youtube.com"
      />
    </div>
  );
}
