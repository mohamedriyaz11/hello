import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Opportunities() {
  const opportunities = [
    {
      title: "Research Opportunity",
      type: "Research Position",
      description: "Looking for motivated enthusiastic Ph.d, Post graduate students, and undergraduate students in the fields of Data Science, Machine Learning, Deep Learning, cloud computing and Human-Computer Interaction. If you are interested, feel free to contact Dr. S.Neelakandan [drsnk1730@gmail.com](mailto:drsnk1730@gmail.com) with your interests and CV.",
      requirements: ["M.E./M.Tech in Computer Science", "Strong programming skills", "Research experience preferred"],
      deadline: "June 30, 2024",
      location: "Chennai, India",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-r from-purple-50 via-indigo-50 to-pink-50 transition-all duration-200">
      <Header />

      <main className="flex-1">
        <div className="container mx-auto px-4 lg:px-8 py-16">
          <h1 className="text-4xl lg:text-5xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 transition-all duration-150" data-testid="text-opportunities-heading">
            Opportunities
          </h1>
          <p className="text-lg text-muted-foreground mb-12 font-semibold animate-pulse select-none" style={{ animationDuration: "1s" }}>
            Current openings for research positions and internships
          </p>

          <div className="space-y-6">
            {opportunities.map((opp, index) => (
              <Card
                key={index}
                className="p-6 hover:ease-in-out hover:shadow-2xl hover:scale-105 transform transition-transform duration-150 bg-gradient-to-br from-white via-violet-50 to-white border border-purple-300 rounded-xl backdrop-blur-md hover:backdrop-brightness-105"
                data-testid={`card-opportunity-${index}`}
              >
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-4">
                  <div>
                    <div className="flex items-center gap-3 mb-2 animate-bounce" style={{ animationDuration: "1s" }}>
                      <h3 className="text-2xl font-semibold text-purple-900">{opp.title}</h3>
                      <Badge className="animate-pulse" style={{ animationDuration: "1s" }}>{opp.type}</Badge>
                    </div>
                    <p className="text-muted-foreground mb-4 transition-all duration-150 hover:underline">{opp.description}</p>
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold mb-2">Requirements:</h4>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground font-mono">
                    {opp.requirements.map((req, reqIndex) => (
                      <li key={reqIndex} className="hover:text-purple-700">{req}</li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-4 items-center mb-4">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span className="transition-all duration-150 hover:text-purple-600">Deadline: {opp.deadline}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    <span className="transition-all duration-150 hover:text-purple-600">{opp.location}</span>
                  </div>
                </div>

                <Button
                  asChild
                  className="bg-purple-600 hover:bg-purple-700 text-white transition-all duration-150 shadow-lg hover:shadow-xl hover:-translate-y-1"
                  data-testid={`button-apply-${index}`}
                >
                  <a href="mailto:drsnk730@gmail.com" target="_blank" rel="noopener noreferrer">
                    Apply Now
                  </a>
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
