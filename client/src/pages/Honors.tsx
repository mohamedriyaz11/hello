import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Award, Trophy, Medal } from "lucide-react";

export default function Honors() {
  const honors = [
    {
      title: "World's Top 2% Scientists",
      organization: "Stanford University",
      year: "2023",
      description: "Recognized among the world's top 2% scientists in the field of Computer Science and Data Analytics.",
      icon: "trophy" as const,
    },
    {
      title: "Best Research Paper Award",
      organization: "IEEE International Conference on Big Data",
      year: "2022",
      description: "Awarded for outstanding research contribution in big data analytics.",
      icon: "award" as const,
    },
    {
      title: "Excellence in Teaching Award",
      organization: "R.M.K. Engineering College",
      year: "2021",
      description: "Recognized for exceptional teaching performance and student mentorship.",
      icon: "medal" as const,
    },
  ];

  const iconMap = {
    trophy: Trophy,
    award: Award,
    medal: Medal,
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <div className="container mx-auto px-4 lg:px-8 py-16">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4" data-testid="text-honors-heading">
            Honors & Awards
          </h1>
          <p className="text-lg text-muted-foreground mb-12">
            Recognition and achievements in academia and research
          </p>

          <div className="space-y-6">
            {honors.map((honor, index) => {
              const Icon = iconMap[honor.icon];
              return (
                <Card key={index} className="p-6 hover-elevate" data-testid={`card-honor-${index}`}>
                  <div className="flex gap-4">
                    <div className="p-3 rounded-lg bg-chart-3/10 h-fit">
                      <Icon className="h-8 w-8 text-chart-3" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-semibold mb-2">{honor.title}</h3>
                      <div className="flex flex-wrap gap-3 items-center mb-3 text-muted-foreground">
                        <span>{honor.organization}</span>
                        <span>•</span>
                        <span>{honor.year}</span>
                      </div>
                      <p className="text-muted-foreground">{honor.description}</p>
                    </div>
                  </div>
                </Card>
              );
            })}
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
