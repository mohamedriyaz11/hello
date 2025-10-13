import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { GraduationCap, Briefcase } from "lucide-react";

export default function Academics() {
  const education = [
    {
      degree: "Ph.D. in Computer Science",
      institution: "R.M.K. Engineering College",
      year: "2018",
    },
    {
      degree: "M.E. in Computer Science",
      institution: "Anna University",
      year: "2012",
    },
  ];

  const experience = [
    {
      position: "Associate Professor",
      institution: "R.M.K. Engineering College",
      department: "Department of Computer Science and Engineering",
      period: "2015 - Present",
    },
    {
      position: "Assistant Professor",
      institution: "R.M.K. Engineering College",
      department: "Department of Computer Science and Engineering",
      period: "2012 - 2015",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <div className="container mx-auto px-4 lg:px-8 py-16">
          <h1 className="text-4xl lg:text-5xl font-bold mb-12" data-testid="text-academics-heading">
            Academics & Experience
          </h1>

          <section className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <GraduationCap className="h-8 w-8 text-primary" />
              <h2 className="text-3xl font-bold">Education</h2>
            </div>
            <div className="space-y-4">
              {education.map((edu, index) => (
                <Card key={index} className="p-6 hover-elevate" data-testid={`card-education-${index}`}>
                  <h3 className="text-xl font-semibold mb-2">{edu.degree}</h3>
                  <p className="text-muted-foreground">{edu.institution}</p>
                  <p className="text-sm text-muted-foreground mt-1">{edu.year}</p>
                </Card>
              ))}
            </div>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-8">
              <Briefcase className="h-8 w-8 text-primary" />
              <h2 className="text-3xl font-bold">Experience</h2>
            </div>
            <div className="space-y-4">
              {experience.map((exp, index) => (
                <Card key={index} className="p-6 hover-elevate" data-testid={`card-experience-${index}`}>
                  <h3 className="text-xl font-semibold mb-2">{exp.position}</h3>
                  <p className="text-muted-foreground">{exp.institution}</p>
                  <p className="text-sm text-muted-foreground">{exp.department}</p>
                  <p className="text-sm text-muted-foreground mt-2 font-medium">{exp.period}</p>
                </Card>
              ))}
            </div>
          </section>
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
