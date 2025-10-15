import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";

export default function Honors() {
  const honors = [
    {
      year: "2015-2017",
      description:
        "Received the Best Faculty award for the academic year 2015-2016, 2016-2017 at Jeppiaar Institute of Technology in CSE Department.",
    },
    {
      year: "2017-2019",
      description:
        "Received the Best Faculty award for the academic year 2017-2018, 2018-2019 at Jeppiaar Institute of Technology in IT Department.",
    },
    {
      year: "2016-2018",
      description:
        "Recognized as Award of Appreciation for Produced 100% Result in Anna University Exam for the academic year 2016-17, 2017-18 at Jeppiaar Institute of Technology.",
    },
    {
      year: "2016",
      description:
        "Infosys Campus Connect Partners in Success 2016 recognized as BRONZE partner Faculty under Inspire-The Campus Connect Faculty Partnership Model.",
    },
    {
      year: "2019",
      description:
        "Received “Confederation of Elite Academicians of IIDC 2019” for Outstanding Contributions from Department of Science and Technology and Texas Instruments powered by AICTE mission.",
    },
    {
      year: "2020",
      description:
        "Smart India Hackathon coordinator and mentor for 2020 (SIH-2020). Team Area51 (PJ239) under my guidance received 1-Lakh Cash award in SIH2020 Grand Finale – Web Application for Grey Market Complaint.",
    },
  ];

  const training = [
    {
      year: "2019",
      description:
        "Data Science using Python special training attended from November 18-11-2019 to 29-11-2019.",
    },
    {
      year: "2018",
      description:
        "Machine Learning Training was attended at Geoinsyssoft From June 2018 to July 2018.",
    },
    {
      year: "2020",
      description:
        "PL-SQL training attended From November 02-11-2020 to 30-11-2020 at Greentechnologies.",
    },
  ];

  const certifications = [
    {
      category: "Online Course",
      type: "ONLINE COURSE & CERTIFICATION",
      details: [
        "NPTEL – 3",
        "Udemy – 3",
        "GUVI –3",
        "TCS-iON Digital Learning – 03",
      ],
      icon: (
        <svg viewBox="0 0 60 60" fill="none" width={70} height={70}><circle cx="30" cy="30" r="28" stroke="#bbd2f7" strokeWidth="4" fill="none" /><path d="M18 48c4-9 19-17 27-18.5C50.5 28 55 33 53.5 40s-9 10.5-16 10.5c-4.5 0-11-2-15.5-2.5zM22 23c2 10 18 14 22.5 11.5" stroke="#bbd2f7" strokeWidth="3" fill="none" /><circle cx="30" cy="20" r="9" stroke="#bbd2f7" strokeWidth="3" fill="none" /></svg>
      ),
      color: "bg-blue-700",
    },
    {
      category: "Professional Society",
      type: "PROFESSIONAL SOCIETY MEMBERSHIP",
      details: [
        "IEEE – Senior Member – 97875342",
        "ISTE LIFETIME MEMBERSHIP – LM76345",
        "IAENG – Member No: 140699",
      ],
      icon: (
        <svg viewBox="0 0 60 60" fill="none" width={70} height={70}><circle cx="30" cy="30" r="28" stroke="#bbd2f7" strokeWidth="4" fill="none" /><path d="M18 48c4-9 19-17 27-18.5C50.5 28 55 33 53.5 40s-9 10.5-16 10.5c-4.5 0-11-2-15.5-2.5zM22 23c2 10 18 14 22.5 11.5" stroke="#bbd2f7" strokeWidth="3" fill="none" /><circle cx="30" cy="20" r="9" stroke="#bbd2f7" strokeWidth="3" fill="none" /></svg>
      ),
      color: "bg-blue-700",
    },
    {
      category: "Industry",
      type: "INDUSTRY TRAINING CERTIFICATE",
      details: [
        "INFOSYS Campus Connect – 2014",
        "Data Science and Big Data Analytics – EMC2 –2016",
        "Machine Learning Using Python – Geo Insyssoft – 2018",
        "INFOSYS Campus Connect – 2019",
        "Data Science Phase 1 – TroonDx – 2019",
      ],
      icon: (
        <svg viewBox="0 0 70 70" fill="none" width={90} height={90}>
          <rect x="6" y="30" width="12" height="8" rx="4" fill="#bbd2f7" />
          <rect x="26" y="10" width="8" height="12" rx="4" fill="#bbd2f7" />
          <rect x="56" y="30" width="8" height="12" rx="4" fill="#bbd2f7" />
          <rect x="30" y="50" width="12" height="8" rx="4" fill="#bbd2f7" />
        </svg>
      ),
      color: "bg-blue-900",
    }
  ];

  // --- AWARDS IMAGE SECTION ---
  // Normally, map award images from a dedicated images list. For demo, repeat the attached image.
  const awardImages = [
    "/path/to/your/awardcert1.jpg", // Replace with your actual imported/image path
    "/path/to/your/awardcert1.jpg",
    "/path/to/your/awardcert1.jpg"
  ];
  // If using next.js, consider: import award1 from '../public/path.jpg' and use award1 in the array

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-tr from-purple-200 via-pink-100 to-yellow-50 dark:from-purple-950 dark:to-gray-900 overflow-x-hidden font-sans">
      <Header />
      <main className="flex-1">
        <div className="container mx-auto px-4 lg:px-8 py-14">
          {/* Honors Section */}
          <h1 className="text-4xl lg:text-5xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 to-purple-800 tracking-tight" data-testid="text-honors-heading">
            Honors
          </h1>
          <h2 className="text-2xl lg:text-3xl font-black text-center mb-16 mt-6 tracking-wide text-purple-900 underline underline-offset-8 decoration-pink-400">
            Academic Achievements & Awards
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {honors.map((honor, idx) => (
              <Card
                key={idx}
                className="p-8 shadow-xl bg-white/60 dark:bg-slate-900/60 backdrop-blur-[3px] border-2 border-fuchsia-400 text-center hover:scale-105 hover:shadow-2xl duration-300 rounded-3xl ring-1 ring-pink-200/30"
                style={{
                  boxShadow:
                    "0 2px 32px 0 rgba(133,82,183,.12), 0 4px 8px rgba(227,108,188,.09)",
                }}
              >
                <div className="text-2xl font-bold mb-3 tracking-widest text-fuchsia-600 drop-shadow-lg animate-pulse">
                  {honor.year}
                </div>
                <p className="text-base md:text-lg text-gray-800 dark:text-gray-100 font-medium">
                  {honor.description}
                </p>
              </Card>
            ))}
          </div>
          {/* Industry Training Section */}
          <h2 className="text-2xl lg:text-3xl font-black text-center mb-12 mt-16 tracking-wide text-purple-900 underline underline-offset-8 decoration-pink-400">
            Industry Training & Course
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-8">
            {training.map((item, idx) => (
              <Card
                key={idx}
                className="p-8 shadow-xl bg-white/60 dark:bg-slate-900/60 backdrop-blur-[3px] border-2 border-indigo-400 text-center hover:scale-105 hover:shadow-2xl duration-300 rounded-3xl ring-1 ring-indigo-200/40"
                style={{
                  boxShadow:
                    "0 2px 32px 0 rgba(99,102,241,.10), 0 4px 8px rgba(79,70,229,.10)",
                }}
              >
                <div className="text-2xl font-bold mb-3 tracking-widest text-pink-500 drop-shadow-md">
                  {item.year}
                </div>
                <p className="text-base md:text-lg text-slate-800 dark:text-gray-100 font-medium">
                  {item.description}
                </p>
              </Card>
            ))}
          </div>
          {/* Certification Section */}
          <h2 className="text-2xl lg:text-3xl font-black text-center mb-12 mt-16 tracking-wide text-blue-900 underline underline-offset-8 decoration-blue-300">
            Certification
          </h2>
          <div className="flex flex-col lg:flex-row justify-center items-stretch gap-12 mb-12">
            {certifications.map((c, idx) => (
              <div key={idx} className={`relative group rounded-3xl ${c.color} text-white px-10 py-8 flex flex-col justify-between shadow-2xl min-w-[320px] max-w-lg w-full hover:scale-105 duration-300`}>
                <span className="absolute top-4 left-7 text-xs opacity-70 tracking-wider uppercase font-semibold">{c.type}</span>
                <div className="flex flex-col mt-8 mb-4">
                  <span className="text-lg font-bold tracking-wide">{c.category}</span>
                  <ul className="list-disc mt-2 list-inside pl-2 space-y-1 text-base font-medium opacity-95">
                    {c.details.map((line, i) => (
                      <li key={i}>{line}</li>
                    ))}
                  </ul>
                </div>
                <span className="absolute bottom-4 right-5 opacity-30 scale-125 transition-all group-hover:scale-[1.10]">{c.icon}</span>
              </div>
            ))}
          </div>
          {/* AWARDS IMAGE GRID */}
          <h2 className="text-2xl lg:text-3xl font-black mt-14 mb-12 tracking-wide text-indigo-900 underline underline-offset-8 decoration-indigo-300 text-left">
            Awards
          </h2>
          <div className="flex flex-row justify-center gap-16 mb-16">
            {awardImages.map((src, i) => (
              <div key={i} className="bg-white border-2 border-blue-300 rounded-xl shadow-lg p-4 flex flex-col items-center transition-all duration-300 hover:scale-105">
                <img src={src} alt={`Award Certificate ${i + 1}`} className="w-56 h-auto object-contain rounded" />
              </div>
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
