import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { GraduationCap, Briefcase } from "lucide-react";

export default function Academics() {
  const education = [
    {
      degree: "Ph.D. (Computer Science & Engineering)",
      institution: "Anna University",
      year: "May 2021",
    },
    {
      degree: "M.E (Computer Science & Engineering)",
      institution: "Vel Tech Engineering College, Anna University",
      year: "2007 - 2009",
    },
    {
      degree: "B.E (Computer Science & Engineering)",
      institution: "L.C.R College of Engineering & Technology, Anna University",
      year: "2003 - 2006",
    },
    {
      degree: "Diploma (Computer Science & Engineering)",
      institution: "John Bosco Polytechnic College, Directorate of Technical Education",
      year: "2000 - 2003",
    },
  ];

  const experience = [
    {
      position: "Research Professor",
      institution: "Hanyang University",
      department: "Brain Pool Fellowship funded by National Research Foundation, South Korea",
      period: "Mar 2024 - Till Date",
    },
    {
      position: "Professor",
      institution: "R.M.K. Engineering College",
      department: "Department of Computer Science & Engineering",
      period: "Sep 2021 - Mar 2024",
    },
    {
      position: "Assistant Professor",
      institution: "Jeppiaar Institute of Technology",
      department: "Department of Information Technology",
      period: "July 2014 - Sep 2021",
    },
    {
      position: "Assistant Professor",
      institution: "R.M.K. College of Engineering and Technology",
      department: "Department of Computer Science & Engineering",
      period: "May 2011 - April 2014",
    },
    {
      position: "Assistant Professor",
      institution: "Tech Multi Tech Dr.RR & Dr.SR Engineering College",
      department: "Department of Information Technology",
      period: "March 2009 - April 2011",
    },
    {
      position: "Lecturer",
      institution: "L.C.R College of Engineering and Technology",
      department: "Department of Computer Science & Engineering",
      period: "July 2006 - June 2007",
    },
  ];

  return (
    <div className="relative min-h-screen flex flex-col bg-gradient-to-br from-slate-100 via-white to-slate-200 overflow-hidden">
      {/* Blurred background blobs */}
      <div className="absolute -top-32 -left-32 w-[400px] h-[400px] bg-purple-300 rounded-full opacity-30 blur-3xl z-0 animate-pulse-slow"></div>
      <div className="absolute top-1/2 -right-40 w-[500px] h-[500px] bg-pink-300 rounded-full opacity-30 blur-3xl z-0 animate-pulse-slower"></div>
      <div className="absolute bottom-0 left-1/4 w-[300px] h-[300px] bg-blue-200 rounded-full opacity-20 blur-2xl z-0 animate-pulse-slowest"></div>

      {/* Foreground Content */}
      <div className="relative z-10">
        <Header />
        <main className="flex-1">
          <div className="container mx-auto px-4 lg:px-8 py-16">
            {/* Page Title */}
            <h1
              className="text-4xl lg:text-5xl font-extrabold mb-12 text-center text-slate-800 animate-fade-in"
              data-testid="text-academics-heading"
            >
              Academics & Experience
            </h1>

            {/* Education Section */}
            <section className="mb-20">
              <div className="flex items-center gap-3 mb-8">
                <GraduationCap className="h-9 w-9 text-primary drop-shadow-md" />
                <h2 className="text-3xl font-bold text-slate-700">Education</h2>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {education.map((edu, index) => (
                  <Card
                    key={index}
                    className="p-6 border border-slate-200 bg-white/60 backdrop-blur-md rounded-xl hover-elevate"
                    data-testid={`card-education-${index}`}
                  >
                    <h3 className="text-xl font-semibold text-slate-800 mb-2">
                      {edu.degree}
                    </h3>
                    <p className="text-slate-600">{edu.institution}</p>
                    <p className="text-sm text-slate-500 mt-1">{edu.year}</p>
                  </Card>
                ))}
              </div>
            </section>

            {/* Experience Section */}
            <section>
              <div className="flex items-center gap-3 mb-8">
                <Briefcase className="h-9 w-9 text-primary drop-shadow-md" />
                <h2 className="text-3xl font-bold text-slate-700">Experience</h2>
              </div>

              <div className="space-y-6">
                {experience.map((exp, index) => (
                  <Card
                    key={index}
                    className="p-6 border border-slate-200 bg-white/60 backdrop-blur-md rounded-xl hover-elevate"
                    data-testid={`card-experience-${index}`}
                  >
                    <h3 className="text-xl font-semibold text-slate-800 mb-2">
                      {exp.position}
                    </h3>
                    <p className="text-slate-600">{exp.institution}</p>
                    {exp.department && (
                      <p className="text-sm text-slate-500">{exp.department}</p>
                    )}
                    <p className="text-sm text-slate-500 mt-2 font-medium">
                      {exp.period}
                    </p>
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
    </div>
  );
}
