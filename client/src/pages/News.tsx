import eventPhoto1 from "@assets/event1.png";
import eventPhoto2 from "@assets/event2.png";
import eventPhoto3 from "@assets/event3.png";
import eventPhoto4 from "@assets/event4.png";
import panelPhoto1 from "@assets/panel1.png";
import panelPhoto2 from "@assets/panel2.png";
import mayPhoto1 from "@assets/may1.png";
import mayPhoto2 from "@assets/may2.png";
import mayPhoto3 from "@assets/may3.png";
import mayPhoto4 from "@assets/may4.png";
import mayPhoto5 from "@assets/may5.png";
import mayPhoto6 from "@assets/may6.png";
import mayForumPhoto1 from "@assets/mayf1.png";
import mayForumPhoto2 from "@assets/mayf2.png";
import mayForumPhoto3 from "@assets/mayf3.png";
import mayForumPhoto4 from "@assets/mayf4.png";
import mayForumPhoto5 from "@assets/mayf5.png";

export default function News() {
  return (
    <div className="container mx-auto px-4 py-8 space-y-10">

      {/* First Event: Keynote & Gallery */}
      <div className="rounded-2xl bg-gradient-to-br from-blue-50 via-white to-blue-100 px-6 py-8 shadow-2xl ring-1 ring-blue-200/40 backdrop-blur-lg">
        <h1 className="text-3xl font-extrabold mb-4 bg-gradient-to-tr from-blue-900 to-blue-400 bg-clip-text text-transparent">2025</h1>
        <h2 className="text-xl font-semibold mb-2 text-blue-700">June 2025</h2>
        <p className="text-gray-700 font-medium mb-4">
          Honored to deliver the keynote address on <span className="italic text-blue-900 font-bold">"Advancing Brain-Computer Interfaces with Generative AI for Cognitive State Modeling and Communications"</span> at the Closed Scientific Event to Foresee the Future of AI, AIJ Conference, held on June 16th, 2025, in the cultural heart of Russia — Saint Petersburg. Grateful for the opportunity to exchange ideas with some of the most brilliant minds from the BRICS+ countries.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 my-8">
          {[eventPhoto1, eventPhoto2, eventPhoto3, eventPhoto4].map((photo, idx) => (
            <div
              key={idx}
              className="group relative overflow-hidden rounded-2xl shadow-2xl ring-1 ring-blue-200/40 transition duration-500 bg-white backdrop-blur-lg hover:-translate-y-2 hover:scale-105 hover:bg-blue-50 hover:shadow-blue-200/30"
            >
              <img
                src={photo}
                alt={`Event Photo ${idx + 1}`}
                className="w-full h-64 object-cover object-center transition duration-500 group-hover:scale-110 group-hover:brightness-90"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-blue-900/80 to-transparent p-4 flex items-end">
                <span className="text-white font-bold text-lg drop-shadow">Event Photo {idx + 1}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Second Event: June Panel & Group Gallery */}
      <div className="rounded-2xl bg-gradient-to-br from-cyan-50 via-white to-cyan-100 px-6 py-8 shadow-xl ring-1 ring-cyan-200/40">
        <section>
          <h3 className="text-2xl font-extrabold mb-2 text-cyan-800">June 2025 🌐</h3>
          <p className="mb-2 text-cyan-700 font-medium">
            The event, part of the Foresight Session: AI Horizons, brought together esteemed researchers and leaders to discuss and shape the next frontiers of Artificial Intelligence.<br />
            It was a privilege to be among this distinguished panel:
          </p>
          <ul className="list-disc list-inside space-y-1 font-semibold text-cyan-900">
            <li>Belevtsev Andrey – Senior VP, Head of Technological Development, Sber</li>
            <li>Eremenko Maxim – VP, Director of AI & ML Development, Sber</li>
            <li>Dr. Burnaev Evgeny – Director, Applied AI Center, Skoltech; Head of Research, AIRI</li>
            <li>Dr. Visilter Yuri – Director, Department of AI & Technical Vision, GosNIIAS</li>
            <li>Prof. Serestina Viriri – Dean, School of Mathematics, Statistics & Computer Science, UKZN, South Africa</li>
            <li>Prof. Milovanović Vladimir – Associate Professor, University of Kragujevac, Serbia</li>
            <li>Dr. Savchenko Andrey – Head of Advanced AI Technologies, SberAI Lab; Researcher, AIRI</li>
            <li>Prof. Kolyubin Sergey – Head of BE2R Lab, ITMO University</li>
            <li>Yudin Dmitry – Head of Intelligent Transport Lab, AIRI; Associate Professor, MIPT</li>
            <li>Markov Sergey – Director of AI Technologies Development, Sber</li>
            <li>Prof. Alain Abel Garóf – Professor, Havana Technological University; AI Practice Leader, Avangenio SRL</li>
            <li>Moiseev Stanislav – R&D Director, T-Bank.</li>
          </ul>
        </section>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 my-8">
          {[panelPhoto1, panelPhoto2].map((photo, idx) => (
            <div
              key={idx}
              className="group relative overflow-hidden rounded-2xl shadow-2xl ring-1 ring-cyan-200/40 bg-white backdrop-blur-lg transition duration-500 hover:-translate-y-2 hover:scale-105 hover:bg-cyan-50 hover:shadow-cyan-200/40"
            >
              <img
                src={photo}
                alt={`Panel Group Photo ${idx + 1}`}
                className="w-full h-80 object-cover object-center transition duration-500 group-hover:scale-110 group-hover:brightness-90"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-cyan-900/70 to-transparent px-4 py-2">
                <span className="text-white font-extrabold text-lg drop-shadow">Panel Group Photo {idx + 1}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Third Event: May 2025 Section & Gallery */}
      <div className="rounded-2xl bg-gradient-to-br from-yellow-50 via-white to-yellow-100 px-6 py-8 shadow-lg ring-1 ring-yellow-200/40">
        <section>
          <h3 className="text-2xl font-extrabold mb-2 text-yellow-800">May 2025</h3>
          <p className="text-yellow-900">
            Honored to have met Prof. Pavlov Yuri Petrovich, Rector of The Sergei Obolensky Russian State University for Geological Prospecting (MGRI)... Grateful to Rector Prof. Pavlov Yuri Petrovich for his warm interaction and hospitality.
          </p>
        </section>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 my-8">
          {[mayPhoto1, mayPhoto2, mayPhoto3, mayPhoto4].map((photo, idx) => (
            <div
              key={idx}
              className="group relative overflow-hidden rounded-2xl shadow-xl ring-1 ring-yellow-200/40 bg-white backdrop-blur-lg transition duration-500 hover:-translate-y-2 hover:scale-105 hover:bg-yellow-50 hover:shadow-yellow-200/30"
            >
              <img
                src={photo}
                alt={`May Event Photo ${idx + 1}`}
                className="w-full h-48 object-cover object-center transition duration-500 group-hover:scale-110 group-hover:brightness-95"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-yellow-900/90 to-transparent px-4 py-2">
                <span className="text-white font-bold text-lg drop-shadow">May Photo {idx + 1}</span>
              </div>
            </div>
          ))}
        </div>
        <section>
          <h3 className="text-2xl font-extrabold mb-2 text-yellow-700">May 2025</h3>
          <p>
            Honored to Deliver a Keynote Address! Highlights of "AI-Powered Secure Affective Computing Model for Cognitive State Recognition in Humans" at the Colloquium, Pyatigorsk, Russia.
          </p>
        </section>
        {/* Perfectly aligned two-photo gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 my-8 items-center justify-center">
          {[mayPhoto5, mayPhoto6].map((photo, idx) => (
            <div
              key={idx}
              className="group relative overflow-hidden rounded-2xl shadow-xl ring-1 ring-yellow-200/40 flex items-center justify-center transition duration-500 hover:-translate-y-2 hover:scale-105 hover:bg-yellow-100 hover:shadow-yellow-200/40"
            >
              <img
                src={photo}
                alt={`May Keynote Photo ${idx + 1}`}
                className="w-full h-64 object-cover object-center transition duration-500 group-hover:scale-110 group-hover:brightness-95"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-yellow-900/80 to-transparent px-4 py-2">
                <span className="text-white font-semibold text-lg">May Keynote {idx + 1}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* FINAL: Forum Section & Gallery */}
      <div className="rounded-2xl bg-gradient-to-br from-indigo-50 via-white to-indigo-100 px-6 py-8 shadow-2xl ring-1 ring-indigo-300/40">
        <section>
          <h3 className="text-2xl font-extrabold mb-2 text-indigo-900">May 2025 | Forum</h3>
          <p className="text-indigo-800">
            International Scientific Forum: Stepping into the Future – Global Foresight, Artificial Intelligence, and Strategic Leadership, Moscow, Russia.<br />
            Honored to be keynote speaker and forum participant; delegates from 60+ countries.
          </p>
        </section>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 my-8">
          {[mayForumPhoto1, mayForumPhoto2, mayForumPhoto3, mayForumPhoto4].map((photo, idx) => (
            <div
              key={idx}
              className="group relative overflow-hidden rounded-2xl shadow-xl ring-1 ring-indigo-300 bg-white backdrop-blur-lg transition duration-500 hover:-translate-y-2 hover:scale-105 hover:bg-indigo-50 hover:shadow-indigo-200"
            >
              <img
                src={photo}
                alt={`May Forum Photo ${idx + 1}`}
                className="w-full h-64 object-cover object-center transition duration-500 group-hover:scale-110 group-hover:brightness-95"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-indigo-900/80 to-transparent px-4 py-2">
                <span className="text-white font-bold text-lg drop-shadow">May Forum {idx + 1}</span>
              </div>
            </div>
          ))}
        </div>
        {/* Document/screenshot or fifth photo */}
        <div className="flex justify-center items-center my-8">
          <div className="group relative overflow-hidden rounded-2xl shadow-2xl ring-2 ring-indigo-300 flex items-center justify-center transition duration-500 hover:-translate-y-2 hover:scale-105 hover:bg-indigo-100 hover:shadow-indigo-300 bg-white">
            <img
              src={mayForumPhoto5}
              alt="Forum Document or Photo"
              className="w-full max-w-2xl h-80 object-contain object-center transition duration-500 group-hover:scale-105 group-hover:brightness-95"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-indigo-900/85 to-transparent px-4 py-2">
              <span className="text-white font-semibold text-lg">Forum Document</span>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
