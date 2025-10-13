import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Opportunities() {
  const opportunities = [
    {
      title: "Ph.D. Position in Machine Learning",
      type: "Research Position",
      description: "Seeking motivated candidates for Ph.D. research in machine learning and big data analytics.",
      requirements: ["M.E./M.Tech in Computer Science", "Strong programming skills", "Research experience preferred"],
      deadline: "June 30, 2024",
      location: "Chennai, India",
    },
    {
      title: "Research Internship - Data Science",
      type: "Internship",
      description: "Summer internship opportunity for undergraduate/graduate students in data science projects.",
      requirements: ["Currently pursuing B.E./M.E. in CS/IT", "Python/R programming", "Interest in data analytics"],
      deadline: "May 15, 2024",
      location: "Chennai, India",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <div className="container mx-auto px-4 lg:px-8 py-16">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4" data-testid="text-opportunities-heading">
            Opportunities
          </h1>
          <p className="text-lg text-muted-foreground mb-12">
            Current openings for research positions and internships
          </p>

          <div className="space-y-6">
            {opportunities.map((opp, index) => (
              <Card key={index} className="p-6 hover-elevate" data-testid={`card-opportunity-${index}`}>
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-4">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-2xl font-semibold">{opp.title}</h3>
                      <Badge>{opp.type}</Badge>
                    </div>
                    <p className="text-muted-foreground mb-4">{opp.description}</p>
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold mb-2">Requirements:</h4>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                    {opp.requirements.map((req, reqIndex) => (
                      <li key={reqIndex}>{req}</li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-4 items-center mb-4">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    Deadline: {opp.deadline}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    {opp.location}
                  </div>
                </div>

                <Button data-testid={`button-apply-${index}`}>Apply Now</Button>
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
