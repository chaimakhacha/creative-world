import React from "react";
import {
  Globe,
  Check,
  Calendar,
  Layers,
  Code,
  Zap,
  Users,
  Award,
  Star,
  Palette,
} from "lucide-react";


const offers = [
  {
    title: "Brand Identity Design",

  },
  {
    title: "Logo Creation",
    
  },
  {
    title: "Marketing Materials",
   
  },
  {
    title: "UI/UX Design",
   
  },
  {
    title: "Print Design",
   
  },
  {
    title: "Digital Graphics",
    
  },
];

const processSteps = [
  { title: "Research", desc: "Market analysis and competitor research" },
  { title: "Concept", desc: "Initial concepts and mood boards." },
  { title: "Design", desc: "Creating visual designs and iterations" },
  { title: "Refinement", desc: "Client feedback and design optimization" },
  { title: "Delivery", desc: "Final assets and brand guidelines" },
];


export default function DesignServices() {
  return (
    <div className="relative min-h-screen text-gray-900">


      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        {/* HEADER */}
        <header className="text-center mb-20">
          <div className="flex justify-center mb-6">
            <div className="bg-white/10 p-4 rounded-full inline-flex">
              <Palette size={36} className="text-white" />
            </div>
          </div>
          <h1 className="text-5xl font-extrabold text-white tracking-tight">Design Services</h1>
          <p className="mt-4 text-lg text-white/90 max-w-2xl mx-auto">
                Creative Visual Solutions That Captivate Audiences
             Creative visual solutions that communicate your brand's essence 
             through innovative design thinking and user experience optimization.         </p>
        </header>

        {/* WHAT WE OFFER */}
        <section className="mb-24">
          <h2 className="text-3xl font-semibold text-center text-blue-200 mb-6">What We Offer</h2>
          <p className="text-center text-gray-100/80 mb-10">
            Comprehensive web development solutions tailored to your unique needs and vision.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {offers.map((o, i) => (
              <article key={i} className="relative">
                {/* top accent (simulates the colored raised edge) */}
                <div className="absolute -top-3 right-6 w-20 h-2 rounded-md shadow-sm offer-top-accent" />

                <div className="bg-white/85 rounded-2xl shadow-lg p-6 min-h-[120px] relative overflow-hidden">
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-lg flex items-center justify-center border border-blue-100 bg-blue-50/80">
                      <Check size={18} className="text-blue-600" />
                    </div>

                    <div className="flex-1">
                      <h3 className="text-blue-700 text-[25px] font-semibold">{o.title}</h3>
                      <p className="mt-2 text-sm text-gray-600">{o.desc}</p>

                      <div className="mt-3 flex gap-2 flex-wrap">
                        {o.tags?.map((t, idx) => (
                          <span
                            key={idx}
                            className="text-sm px-2 py-1 bg-gray-100 rounded-full inline-block"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                  
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* OUR CREATIVE PROCESS - vertical center rod with alternating cards */}
        <section className="mb-24">
          <h2 className="text-3xl font-semibold text-center text-blue-200 mb-6">Our Creative Process</h2>
          <p className="text-center text-gray-100/80 mb-10">
            Our proven artistic methodology ensures exceptional results for every project.
          </p>

          <div className="relative">
            {/* central vertical rod */}
            <div className="absolute left-1/2 transform -translate-x-1/2 top-6 bottom-6 w-[2px] bg-gradient-to-b from-white-300/40 to-transparent timeline-line" />

            <div className="space-y-12">
              {processSteps.map((step, idx) => {
                const isLeft = idx % 2 === 0;
                return (
                  <div key={idx} className="relative">
                    {/* the circle aligned to the center line at the vertical center of this item */}
                    <div
                      className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 hidden md:block"
                      aria-hidden
                    >
                      <div className="w-5 h-5 rounded-full bg-white border-4 border-blue-200 shadow-sm" />
                    </div>

                  <div className={`flex flex-col md:flex-row items-center ${isLeft ? "md:justify-start" : "md:justify-end"}`}>
  {/* LEFT side */}
  <div className={`w-full md:w-1/2 ${isLeft ? "md:mr-16" : "md:ml-16"}`}>
    {isLeft && (
      <div className="bg-white/90 rounded-xl p-6 shadow-md">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-md flex items-center justify-center bg-blue-50 border">
            <Calendar size={18} className="text-blue-600" />
          </div>
          <div>
            <h4 className="font-semibold text-blue-700">{step.title}</h4>
            <p className="text-sm text-gray-600 mt-1">{step.desc}</p>
          </div>
        </div>
      </div>
    )}
  </div>

  {/* spacer (the central column) */}
  <div className="hidden md:block w-[2px]" />

  {/* RIGHT side */}
  <div className={`w-full md:w-1/2 ${isLeft ? "md:pl-16" : "md:pr-16"}`}>
    {!isLeft && (
      <div className="bg-white/90 rounded-xl p-6 shadow-md">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-md flex items-center justify-center bg-blue-50 border">
            <Code size={18} className="text-blue-600" />
          </div>
          <div>
            <h4 className="font-semibold text-blue-700">{step.title}</h4>
            <p className="text-sm text-gray-600 mt-1">{step.desc}</p>
          </div>
        </div>
      </div>
    )}
  </div>
</div>

                  </div>
                );
              })}
            </div>
          </div>
        </section>

     

       
      </div>
    </div>
  );
}
