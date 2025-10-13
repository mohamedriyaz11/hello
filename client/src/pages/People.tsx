import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function People() {
  const people = [
    {
      name: "Research Scholar 1",
      role: "Ph.D. Candidate",
      area: "Machine Learning & Big Data",
      email: "scholar1@example.com",
    },
    {
      name: "Research Scholar 2",
      role: "Ph.D. Candidate",
      area: "Data Science & Analytics",
      email: "scholar2@example.com",
    },
    {
      name: "Research Scholar 3",
      role: "M.E. Student",
      area: "Cloud Computing",
      email: "scholar3@example.com",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <div className="container mx-auto px-4 lg:px-8 py-16">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4" data-testid="text-people-heading">
            People
          </h1>
          <p className="text-lg text-muted-foreground mb-12">
            Meet the research team and collaborators
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {people.map((person, index) => (
              <Card key={index} className="p-6 hover-elevate" data-testid={`card-person-${index}`}>
                <div className="flex flex-col items-center text-center space-y-4">
                  <Avatar className="w-24 h-24">
                    <AvatarFallback className="text-2xl bg-primary/10 text-primary">
                      {person.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">{person.name}</h3>
                    <p className="text-sm text-muted-foreground mb-1">{person.role}</p>
                    <p className="text-sm text-muted-foreground">{person.area}</p>
                  </div>
                  <Button variant="outline" size="sm" className="gap-2" data-testid={`button-email-${index}`}>
                    <Mail className="h-4 w-4" />
                    Contact
                  </Button>
                </div>
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
