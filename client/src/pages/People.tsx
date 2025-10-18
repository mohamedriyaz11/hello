// import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Mail } from "lucide-react";
import { FaLinkedin } from "react-icons/fa";
import p1 from "@assets/image1.png";
import p2 from "@assets/image2.png";
import p3 from "@assets/image3.png";
import p4 from "@assets/image4.png";

export default function People() {
  const people = [
    {
      name: "Mr. Shine Henry",
      role: "Assistant Professor",
      area: "Ph.D. in Information and Communication Engineering Anna University",
      email: "shinehenry@example.com",
      linkedin: "https://www.linkedin.com/",
      logo: p1,
    },
    {
      name: "Ms. Indhumathi.C",
      role: "Ph.D. Candidate",
      area: "Data Science & Analytics",
      email: "indhumathi@example.com",
      linkedin: "https://www.linkedin.com/",
      logo: p2,
    },
    {
      name: "Mr. Premkumar.R",
      role: "M.E. Student",
      area: "Cloud Computing",
      email: "premkumar@example.com",
      linkedin: "https://www.linkedin.com/",
      logo: p3,
    },
  ];

  const masterStudents = [
    {
      name: "Mr. Thamaraiselvan.K",
      course: "M.E. Computer Science and Engineering",
      institution: "R.M.K Engineering College",
      image: p4,
      linkedin: "https://linkedin.com/",
      email: "thamaraiselvan@example.com",
    },
  ];

  return (
    <div className="relative min-h-screen flex flex-col overflow-hidden bg-gradient-to-tr from-sky-50 via-white to-rose-50">
      {/* Decorative glowing blobs in the background */}
      <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-pink-300 opacity-20 blur-3xl rounded-full animate-pulse z-0"></div>
      <div className="absolute bottom-[-120px] right-[-80px] w-[350px] h-[350px] bg-sky-300 opacity-20 blur-3xl rounded-full animate-pulse z-0"></div>

      {/* Main Content Layer */}
      <div className="relative z-10">
        {/* <Header /> */}
        <main className="flex-1">
          <div className="container mx-auto px-4 lg:px-8 py-16">
            <h1
              className="text-4xl lg:text-5xl font-extrabold mb-4 text-center text-gray-800"
              data-testid="text-people-heading"
            >
              People
            </h1>
            <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
              Meet the passionate team of scholars, researchers, and innovators shaping the future.
            </p>

            {/* Research Team */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {people.map((person, index) => (
                <Card
                  key={index}
                  className="p-6 bg-white/60 backdrop-blur-lg shadow-xl border border-slate-200 rounded-xl hover:scale-105 transition-transform duration-300"
                  data-testid={`card-person-${index}`}
                >
                  <div className="flex flex-col items-center text-center space-y-4">
                    {person.logo ? (
                      <img
                        src={person.logo}
                        alt={`${person.name} logo`}
                        className="w-24 h-24 rounded-full object-cover border shadow-md"
                      />
                    ) : (
                      <Avatar className="w-24 h-24">
                        <AvatarFallback className="text-2xl bg-primary/10 text-primary">
                          {person.name.split(" ").map((n) => n[0]).join("")}
                        </AvatarFallback>
                      </Avatar>
                    )}

                    <div>
                      <h3 className="text-lg font-semibold text-gray-800">{person.name}</h3>
                      <p className="text-sm text-muted-foreground">{person.role}</p>
                      <p className="text-sm text-muted-foreground italic">{person.area}</p>
                    </div>

                    <div className="flex flex-col gap-2 w-full">
                      <a
                        href={`mailto:${person.email}`}
                        className="inline-flex items-center justify-center gap-2 px-4 py-2 border rounded-md text-sm font-medium text-primary border-primary hover:bg-primary/10 transition"
                        data-testid={`button-email-${index}`}
                      >
                        <Mail className="h-4 w-4" />
                        Contact
                      </a>
                      {person.linkedin && (
                        <a
                          href={person.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-2 px-4 py-2 border rounded-md text-sm font-medium text-primary border-primary hover:bg-primary/10 transition"
                          data-testid={`button-linkedin-${index}`}
                        >
                          <FaLinkedin className="h-4 w-4" />
                          LinkedIn
                        </a>
                      )}
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Master Students Section */}
            <h2 className="text-3xl font-bold mt-20 mb-8 text-slate-800 text-center">
              Master Students
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {masterStudents.map((student, idx) => (
                <Card
                  key={idx}
                  className="p-6 bg-white/60 backdrop-blur-lg shadow-xl border border-slate-200 rounded-xl hover:scale-105 transition-transform duration-300"
                  data-testid={`card-master-${idx}`}
                >
                  <div className="flex flex-col items-center text-center space-y-4">
                    <img
                      src={student.image}
                      alt={student.name}
                      className="w-32 h-32 object-cover rounded-full border shadow-sm"
                    />
                    <h3 className="text-lg font-semibold text-rose-600">{student.name}</h3>
                    <p className="text-sm text-muted-foreground font-semibold">{student.course}</p>
                    <p className="text-sm text-muted-foreground">{student.institution}</p>
                    <div className="flex gap-2 mt-3">
                      <a
                        href={student.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 border rounded-md text-sm font-medium text-primary border-primary hover:bg-primary/10 transition"
                        data-testid={`button-linkedin-master-${idx}`}
                      >
                        <FaLinkedin className="h-5 w-5" />
                        LinkedIn
                      </a>
                      <a
                        href={`mailto:${student.email}`}
                        className="inline-flex items-center px-4 py-2 border rounded-md text-sm font-medium text-primary border-primary hover:bg-primary/10 transition"
                        data-testid={`button-email-master-${idx}`}
                      >
                        <Mail className="h-5 w-5" />
                        Contact
                      </a>
                    </div>
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
    </div>
  );
}
