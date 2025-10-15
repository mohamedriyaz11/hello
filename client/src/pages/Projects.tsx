import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Projects() {
  const projects = [
    {
      title: "Developing a Modified Deep Belief Network with Metaheuristic Optimization Algorithm for Predicting Face Emotion and Sentimental Analysis using Electroencephalogram",
      description: (
        <>
          This funding will support hosting outstanding international researchers. Associate Professor Dr. Neelakandan Subramani will join the lab as a Research Professor for 1 year through this funding.
          <br />
          <span className="block mt-2">
            <span className="font-semibold">Funding Source:</span> National Research Foundation of Korea (NRFK),
            <span className="font-semibold ml-1">Duration:</span> 2023-2024
          </span>
        </>
      ),
      status: "Ongoing",
      technologies: [
        "Deep Belief Network",
        "Metaheuristics",
        "EEG",
        "Emotion Recognition",
        "Sentiment Analysis"
      ],
    },
    {
      title: "Development of Deep Learning Model to Evaluate Cognitive Status based on EEG data with Wavelet Transform Techniques",
      description: (
        <>
          <span className="block">
            <span className="font-semibold">Funding Source:</span> National Research Foundation of Korea (NRFK),
            <span className="font-semibold ml-1">Duration:</span> Sep 2024 to Feb 2026
          </span>
        </>
      ),
      status: "Ongoing",
      technologies: [
        "Deep Learning",
        "EEG",
        "Wavelet Transform",
        "Cognitive Analysis"
      ],
    }
  ];

  return (
    <div className="relative min-h-screen flex flex-col overflow-hidden bg-gradient-to-tr from-sky-50 via-white to-rose-50">
      {/* Background blobs */}
      <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-pink-300 opacity-20 blur-3xl rounded-full animate-pulse z-0"></div>
      <div className="absolute bottom-[-120px] right-[-80px] w-[350px] h-[350px] bg-sky-300 opacity-20 blur-3xl rounded-full animate-pulse z-0"></div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Header />
        <main className="flex-1">
          <div className="container mx-auto px-4 lg:px-8 py-16">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4" data-testid="text-projects-heading">
              Projects
            </h1>
            <p className="text-lg text-muted-foreground mb-12">
              Current and completed research projects
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-center">
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
    </div>
  );
}
