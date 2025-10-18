// import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { GraduationCap, Briefcase } from "lucide-react";

// Dot/logo for timeline center
function TimelineDot({ icon, color }) {
  return (
    <div
      className={`
        flex items-center justify-center
        w-20 h-20 rounded-full shadow-2xl border-4 border-white z-20
        bg-gradient-to-br ${color} animate-bounce
      `}
    >
      {icon}
    </div>
  );
}

export default function Academics() {
  const education = [
    {
      degree: "Ph.D. (Computer Science & Engineering)",
      institution: "Anna University",
      year: "May 2021",
      logo: <GraduationCap className="w-10 h-10 text-white" />,
    },
    {
      degree: "M.E (Computer Science & Engineering)",
      institution: "Vel Tech Engineering College, Anna University",
      year: "2007 - 2009",
      logo: <GraduationCap className="w-10 h-10 text-white" />,
    },
    {
      degree: "B.E (Computer Science & Engineering)",
      institution: "L.C.R College of Engineering & Technology, Anna University",
      year: "2003 - 2006",
      logo: <GraduationCap className="w-10 h-10 text-white" />,
    },
    {
      degree: "Diploma (Computer Science & Engineering)",
      institution: "John Bosco Polytechnic College, Directorate of Technical Education",
      year: "2000 - 2003",
      logo: <GraduationCap className="w-10 h-10 text-white" />,
    },
  ];

  const experience = [
    {
      position: "Research Professor",
      institution: "Hanyang University",
      department: "Brain Pool Fellowship funded by National Research Foundation, South Korea",
      period: "Mar 2024 - Till Date",
      logo: <Briefcase className="w-10 h-10 text-white" />,
    },
    {
      position: "Professor",
      institution: "R.M.K. Engineering College",
      department: "Department of Computer Science & Engineering",
      period: "Sep 2021 - Mar 2024",
      logo: <Briefcase className="w-10 h-10 text-white" />,
    },
    {
      position: "Assistant Professor",
      institution: "Jeppiaar Institute of Technology",
      department: "Department of Information Technology",
      period: "July 2014 - Sep 2021",
      logo: <Briefcase className="w-10 h-10 text-white" />,
    },
    {
      position: "Assistant Professor",
      institution: "R.M.K. College of Engineering and Technology",
      department: "Department of Computer Science & Engineering",
      period: "May 2011 - April 2014",
      logo: <Briefcase className="w-10 h-10 text-white" />,
    },
    {
      position: "Assistant Professor",
      institution: "Tech Multi Tech Dr.RR & Dr.SR Engineering College",
      department: "Department of Information Technology",
      period: "March 2009 - April 2011",
      logo: <Briefcase className="w-10 h-10 text-white" />,
    },
    {
      position: "Lecturer",
      institution: "L.C.R College of Engineering and Technology",
      department: "Department of Computer Science & Engineering",
      period: "July 2006 - June 2007",
      logo: <Briefcase className="w-10 h-10 text-white" />,
    },
  ];

  function renderTimeline(entries, color) {
    return (
      <section className="relative my-16">
        {/* Vertical timeline line center */}
        <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 h-full w-2 bg-gradient-to-b from-violet-200 via-blue-200 to-pink-200 z-10"></div>
        <div className="flex flex-col gap-20 relative">
          {entries.map((entry, idx) => {
            const leftSide = idx % 2 === 0;
            return (
              <div key={idx} className="flex flex-col md:flex-row md:items-center relative">
                {/* Left-aligned card and logo (odd rows) */}
                {leftSide ? (
                  <>
                    <div className="md:w-5/12 md:pr-8 flex md:justify-end md:text-right z-20">
                      <Card className="p-8 border border-violet-200 bg-gradient-to-tr from-white/80 to-purple-50 shadow-xl rounded-2xl transition-all duration-300 hover:scale-105 hover:bg-blue-100/80 hover:border-sky-300 animate-fade-slide-up">
                        <h3 className="text-xl font-bold text-slate-800 mb-2">{entry.degree || entry.position}</h3>
                        <p className="text-violet-700">{entry.institution}</p>
                        {entry.department && (
                          <p className="text-xs text-slate-500">{entry.department}</p>
                        )}
                        <p className="text-xs text-slate-500 mt-1 font-medium">{entry.year || entry.period}</p>
                      </Card>
                    </div>
                    <div className="md:w-2/12 flex items-center justify-center">
                      <TimelineDot icon={entry.logo} color={color} />
                    </div>
                    <div className="md:w-5/12"></div>
                  </>
                ) : (
                  /* Right-aligned card and logo (even rows) */
                  <>
                    <div className="md:w-5/12"></div>
                    <div className="md:w-2/12 flex items-center justify-center">
                      <TimelineDot icon={entry.logo} color={color} />
                    </div>
                    <div className="md:w-5/12 md:pl-8 flex md:justify-start md:text-left z-20">
                      <Card className="p-8 border border-violet-200 bg-gradient-to-tr from-white/80 to-purple-50 shadow-xl rounded-2xl transition-all duration-300 hover:scale-105 hover:bg-blue-100/80 hover:border-sky-300 animate-fade-slide-up">
                        <h3 className="text-xl font-bold text-slate-800 mb-2">{entry.degree || entry.position}</h3>
                        <p className="text-violet-700">{entry.institution}</p>
                        {entry.department && (
                          <p className="text-xs text-slate-500">{entry.department}</p>
                        )}
                        <p className="text-xs text-slate-500 mt-1 font-medium">{entry.year || entry.period}</p>
                      </Card>
                    </div>
                  </>
                )}
              </div>
            );
          })}
        </div>
      </section>
    );
  }

  return (
    <div className="relative min-h-screen flex flex-col bg-gradient-to-br from-purple-50 via-white to-blue-100 overflow-hidden">
      {/* Decorative blobs... unchanged */}
      <div className="relative z-10">
        {/* <Header /> */}
        <main className="flex-1">
          <div className="container mx-auto px-4 lg:px-8 py-16 relative">
            <h1 className="text-5xl font-extrabold mb-14 text-center tracking-tight bg-gradient-to-r from-purple-700 via-fuchsia-500 to-blue-400 bg-clip-text text-transparent animate-gradient"
              data-testid="text-academics-heading">
              Academics & Experience
            </h1>
            <div className="mb-10 flex items-center gap-4 justify-center">
              <GraduationCap className="h-11 w-11 text-violet-700 animate-bounce" />
              <h2 className="text-3xl font-bold bg-gradient-to-r from-violet-500 via-sky-600 to-blue-400 bg-clip-text text-transparent animate-gradient">
                Education
              </h2>
            </div>
            {renderTimeline(education, "from-violet-400 via-blue-400 to-purple-400")}
            <div className="mb-10 flex items-center gap-4 justify-center">
              <Briefcase className="h-11 w-11 text-pink-600 animate-bounce" />
              <h2 className="text-3xl font-bold bg-gradient-to-r from-pink-400 via-blue-400 to-violet-500 bg-clip-text text-transparent animate-gradient">
                Experience
              </h2>
            </div>
            {renderTimeline(experience, "from-pink-400 via-blue-400 to-violet-400")}
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
      <style jsx global>{`
        @keyframes pulse {
          0%, 100% { transform: scale(1);}
          50% { transform: scale(1.08);}
        }
        .animate-pulse { animation: pulse 6s ease-in-out infinite; }
        @keyframes float {
          0%,100%{transform:translateY(0);}
          50%{transform:translateY(-18px);}
        }
        .animate-float { animation: float 9s cubic-bezier(0.57,0.65,0.26,0.95) infinite; }
        .animate-float-reverse { animation: float 10s cubic-bezier(0.57,0.65,0.26,0.95) infinite reverse;}
        @keyframes gradient-move {
          0% {background-position:0% 50%;}
          50% {background-position:100% 50%;}
          100% {background-position:0% 50%;}
        }
        .animate-gradient{
          background-size: 200% 200%;
          animation: gradient-move 6s ease-in-out infinite;
        }
        @keyframes fade-slide-up {
          0% { opacity:0; transform:translateY(30px);}
          100% { opacity:1; transform:translateY(0);}
        }
        .animate-fade-slide-up { animation: fade-slide-up 1.1s cubic-bezier(.19,1,.22,1) both; }
        @keyframes bounce {
          0%, 100% { transform: translateY(0);}
          50% { transform: translateY(-11px);}
        }
        .animate-bounce { animation: bounce 1.6s infinite;}
      `}
      </style>
    </div>
  );
}
