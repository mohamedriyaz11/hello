import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";

// Example images
const images = [
  "/path/to/image1.jpg",
  "/path/to/image2.jpg",
  "/path/to/image3.jpg",
  "/path/to/image4.jpg"
];

const newsEvents = [
  {
    date: "June 2025",
    title: "Keynote Address at AI Conference",
    content: `Honored to deliver the keynote address on "Advancing Brain-Computer Interfaces with Generative AI..." at the Closed Scientific Event in St. Petersburg. Grateful for the opportunity to exchange ideas with some of the most brilliant minds from the BRICS+ countries. The discussions on the future of AI, brain-computer integration, and cognitive modeling were both inspiring and impactful.`,
    images: [images[0], images[1], images[2], images[3]],
  },
  {
    date: "May 2025",
    title: "Keynote at SYRCoSE Colloquium",
    content: `Delivered a keynote on "AI-Powered Secure Affective Computing Models for Cognitive State Recognition in Healthcare" at the SYRCoSE Colloquium in Pyatigorsk.`,
    images: [images[0], images[1]],
  }
];

export default function News() {
  return (
    <>
      <Header />
      <main className="max-w-6xl mx-auto py-8 px-4">
        <h1 className="text-3xl font-bold mb-8">News & Events</h1>
        {newsEvents.map((event, i) => (
          <section key={i} className="mb-12">
            <div className="mb-2 flex items-center gap-4">
              <span className="text-2xl text-orange-600 font-bold">{event.date}</span>
              <span className="text-lg font-semibold">{event.title}</span>
            </div>
            <p className="mb-4">{event.content}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {event.images.map((src, idx) => (
                <Card key={idx} className="overflow-hidden p-0">
                  <img src={src} alt={`Event Image ${idx + 1}`} className="w-full h-64 object-cover" />
                </Card>
              ))}
            </div>
          </section>
        ))}
      </main>
      
    </>
  );
}
