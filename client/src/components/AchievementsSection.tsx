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
      {/* Animated Gradient Rings */}
      <svg className="absolute top-[-150px] left-[-150px] z-0 pointer-events-none" width="400" height="400">
        <circle cx="200" cy="200" r="120" stroke="url(#grad1)" strokeWidth="50" fill="none" opacity="0.15">
          <animate attributeName="r" values="120;160;120" dur="6s" repeatCount="indefinite" />
        </circle>
        <defs>
          <linearGradient id="grad1" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#c084fc" />
            <stop offset="100%" stopColor="#f472b6" />
          </linearGradient>
        </defs>
      </svg>
      <svg className="absolute right-[-160px] bottom-[-150px] z-0 pointer-events-none" width="400" height="400">
        <circle cx="200" cy="200" r="95" stroke="url(#grad2)" strokeWidth="40" fill="none" opacity="0.13">
          <animate attributeName="r" values="95;125;95" dur="7s" repeatCount="indefinite" />
        </circle>
        <defs>
          <linearGradient id="grad2" x1="1" y1="1" x2="0" y2="0">
            <stop offset="0%" stopColor="#818cf8"/>
            <stop offset="100%" stopColor="#67e8f9" />
          </linearGradient>
        </defs>
      </svg>

      {/* Blurred animated blobs */}
      <div className="absolute -top-32 -left-32 w-[400px] h-[400px] bg-purple-300 rounded-full opacity-40 blur-3xl z-0 animate-pulse"></div>
      <div className="absolute top-1/2 -right-40 w-[500px] h-[500px] bg-pink-300 rounded-full opacity-30 blur-3xl z-0 animate-float"></div>
      <div className="absolute bottom-0 left-1/4 w-[300px] h-[300px] bg-blue-200 rounded-full opacity-20 blur-2xl z-0 animate-float-reverse"></div>
      
      {/* Foreground Content */}
      <div className="relative z-10">
        <Header />
        <main className="flex-1">
          <div className="container mx-auto px-4 lg:px-8 py-16">
            <h1
              className="text-5xl font-black mb-16 text-center text-slate-800 tracking-tight animate-fade-in"
              data-testid="text-academics-heading"
            >
              <span className="bg-gradient-to-r from-purple-700 via-indigo-500 to-pink-400 bg-clip-text text-transparent block animate-gradient">
                Academics & Experience
              </span>
            </h1>

            {/* Education Section */}
            <section className="mb-24">
              <div className="flex items-center gap-3 mb-10">
                <GraduationCap className="h-10 w-10 text-purple-600 animate-bounce" />
                <h2 className="text-2xl lg:text-3xl font-bold text-slate-700 bg-gradient-to-r from-purple-500 via-indigo-400 to-pink-400 bg-clip-text text-transparent animate-gradient">
                  Education
                </h2>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {education.map((edu, index) => (
                  <Card
                    key={index}
                    className="p-7 border border-indigo-100 bg-white/70 shadow-xl rounded-2xl overflow-hidden relative hover:scale-105 hover:bg-purple-50/80 hover:shadow-2xl transition-all duration-300"
                    style={{ minHeight: 168 }}
                  >
                    <div className="absolute -top-5 -right-8 w-16 h-16 bg-gradient-to-br from-purple-400 via-pink-300 to-indigo-100 opacity-15 blur-xl" />
                    <div className="absolute -bottom-6 -left-8 w-20 h-20 bg-gradient-to-br from-blue-300 via-indigo-300 to-pink-200 opacity-10 blur-xl" />
                    <div className="relative z-10">
                      <h3 className="text-xl font-bold text-slate-800 mb-2 animate-fade-slide-up">{edu.degree}</h3>
                      <p className="text-indigo-600 font-medium">{edu.institution}</p>
                      <p className="text-xs text-slate-500">{edu.year}</p>
                    </div>
                  </Card>
                ))}
              </div>
            </section>
            
            {/* Experience Section */}
            <section>
              <div className="flex items-center gap-3 mb-10">
                <Briefcase className="h-10 w-10 text-pink-600 animate-bounce" />
                <h2 className="text-2xl lg:text-3xl font-bold text-slate-700 bg-gradient-to-r from-pink-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent animate-gradient">
                  Experience
                </h2>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                {experience.map((exp, index) => (
                  <Card
                    key={index}
                    className="p-7 border border-pink-100 bg-white/70 shadow-xl rounded-2xl overflow-hidden relative hover:scale-105 hover:bg-pink-50/80 hover:shadow-2xl transition-all duration-300"
                  >
                    <div className="absolute -top-6 -right-7 w-14 h-14 bg-gradient-to-br from-pink-300 via-indigo-200 to-purple-200 opacity-15 blur-xl" />
                    <div className="absolute -bottom-7 -left-10 w-16 h-16 bg-gradient-to-br from-blue-200 via-pink-200 to-indigo-200 opacity-10 blur-xl" />
                    <div className="relative z-10">
                      <h3 className="text-xl font-bold text-slate-800 mb-2 animate-fade-slide-up">{exp.position}</h3>
                      <p className="text-pink-600 font-medium">{exp.institution}</p>
                      {exp.department && (
                        <p className="text-xs text-slate-500">{exp.department}</p>
                      )}
                      <p className="text-xs text-slate-500 mt-2 font-medium">{exp.period}</p>
                    </div>
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

      {/* Custom keyframes for graphics and entrance effects */}
      <style>{`
        @keyframes pulse {
          0%, 100% { transform: scale(1);}
          50% { transform: scale(1.07);}
        }
        .animate-pulse { animation: pulse 6s infinite; }
        @keyframes float {
          0%,100%{transform:translateY(0);}
          50%{transform:translateY(-18px);}
        }
        .animate-float { animation: float 9s ease-in-out infinite; }
        .animate-float-reverse { animation: float 10s ease-in-out infinite reverse;}
        @keyframes fade-in {
          0% { opacity: 0; transform: translateY(36px);}
          100% { opacity: 1; transform: translateY(0);}
        }
        .animate-fade-in { animation: fade-in 1.2s cubic-bezier(.39,.58,.57,1) forwards}
        @keyframes fade-slide-up {
          0% { opacity:0; transform:translateY(30px);}
          100% { opacity:1; transform:translateY(0);}
        }
        .animate-fade-slide-up { animation: fade-slide-up 1s cubic-bezier(.19,1,.22,1) both }
        @keyframes bounce {
          0%, 100% { transform: translateY(0);}
          50% { transform: translateY(-8px);}
        }
        .animate-bounce { animation: bounce 1.7s infinite; }
        @keyframes gradient-move {
          0% {background-position:0% 50%;}
          50% {background-position:100% 50%;}
          100% {background-position:0% 50%;}
        }
        .animate-gradient{
          background-size: 200% 200%;
          animation: gradient-move 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
