import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";

export default function Research() {
  const metrics = [
    {
      label: "SCI/SCIE",
      value: 64,
      image: "/sci-scie.png", // Place actual path or import
    },
    {
      label: "Scopus",
      value: 76,
      image: "/scopus.png",
    },
    {
      label: "Patent Published",
      value: "04",
      image: "/patent.png",
    },
    {
      label: "Google Scholar",
      value: 2836,
      image: "/google-scholar.png",
    },
    {
      label: "Publons Citation",
      value: 1472,
      image: "/publons.png",
    },
    {
      label: "Scopus Citation",
      value: 2259,
      image: "/scopus-citation.png",
    },
    {
      label: "Books",
      value: "01",
      image: "/books.png",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-1">
        <div className="container mx-auto px-4 lg:px-8 py-16">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4 tracking-tight underline underline-offset-8 decoration-indigo-300" data-testid="text-research-heading">
            Research & Publications
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mt-16">
            {metrics.slice(0, 4).map((item, idx) => (
              <Card
                key={idx}
                className="flex flex-col items-center justify-between py-8 px-5 text-center border-2 border-pink-100 bg-white/90 rounded-2xl shadow-lg hover:shadow-2xl transition duration-200"
              >
                <span className="text-lg md:text-xl font-semibold text-pink-500 mb-2">{item.label}</span>
                <img
                  src={item.image}
                  alt={item.label}
                  className="w-28 max-h-28 object-contain mx-auto mb-2"
                  style={{ minHeight: 64 }}
                />
                <span className="text-5xl font-bold text-pink-400 mt-2">{item.value}</span>
              </Card>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-12">
            {metrics.slice(4).map((item, idx) => (
              <Card
                key={idx + 4}
                className="flex flex-col items-center justify-between py-8 px-5 text-center border-2 border-pink-100 bg-white/90 rounded-2xl shadow-lg hover:shadow-2xl transition duration-200"
              >
                <span className="text-lg md:text-xl font-semibold text-pink-500 mb-2">{item.label}</span>
                <img
                  src={item.image}
                  alt={item.label}
                  className="w-28 max-h-28 object-contain mx-auto mb-2"
                  style={{ minHeight: 64 }}
                />
                <span className="text-5xl font-bold text-pink-400 mt-2">{item.value}</span>
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
