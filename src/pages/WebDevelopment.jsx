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
} from "lucide-react";

/**
 * WebDevelopment page component
 * - Keeps .animated-gradient from App.css
 * - "What We Offer" styled cards with top accent and right faded dot
 * - "Our Creative Process" vertical centered timeline (alternating sides)
 * - "Featured Projects" + Stats row below
 */
const offers = [
  {
    title: "Responsive Web Design",
    desc: "Mobile-first interfaces with accessible UX and modern layouts.",
    tags: ["UI", "Accessibility"],
  },
  {
    title: "E-commerce Development",
    desc: "Secure checkout, product management, and payment integrations.",
    tags: ["Stripe", "Shopify", "WooCommerce"],
  },
  {
    title: "Custom Web Applications",
    desc: "Tailored apps for complex business workflows and automation.",
    tags: ["APIs", "Realtime"],
  },
  {
    title: "SEO Optimization",
    desc: "Technical SEO, structured data and performance optimizations.",
    tags: ["Core Web Vitals"],
  },
  {
    title: "Performance Optimization",
    desc: "Fast load times and optimized assets for happier users.",
    tags: ["Lighthouse"],
  },
  {
    title: "Cross-browser Compatibility",
    desc: "Polished experience across browsers and devices.",
    tags: ["Testing"],
  },
];

const processSteps = [
  { title: "Discovery", desc: "Understanding your business goals and requirements." },
  { title: "Design", desc: "Wireframes, visual systems and interaction design." },
  { title: "Development", desc: "Building with modern technologies and clean code." },
  { title: "Testing", desc: "Comprehensive QA across devices and browsers." },
  { title: "Launch", desc: "Deployment, monitoring and performance tuning." },
];

const featured = [
  {
    title: "E-commerce Platform",
    desc: "Complete online store with payment integration",
    tech: ["Next.js", "Node.js", "Stripe"],
  },
  {
    title: "Corporate Website",
    desc: "Professional business website with Headless CMS",
    tech: ["React", "Tailwind", "Headless CMS"],
  },
  {
    title: "Business Management",
    desc: "Custom business management solution",
    tech: ["Vue", "Express", "MongoDB"],
  },
];

const stats = [
  { label: "Happy Clients", value: "350+", icon: <Users size={18} /> },
  { label: "Projects Completed", value: "120+", icon: <Layers size={18} /> },
  { label: "Client Rating", value: "4.9/5", icon: <Star size={18} /> },
  { label: "Years Experience", value: "10+", icon: <Award size={18} /> },
];

export default function WebDevelopment() {
  return (
    <div className="relative min-h-screen text-gray-900">
      {/* keep your gradient background in App.css */}
      <div className="animated-gradient"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        {/* HEADER */}
        <header className="text-center mb-20">
          <div className="flex justify-center mb-6">
            <div className="bg-white/10 p-4 rounded-full inline-flex">
              <Globe size={36} className="text-white" />
            </div>
          </div>
          <h1 className="text-5xl font-extrabold text-white tracking-tight">Web Development</h1>
          <p className="mt-4 text-lg text-white/90 max-w-2xl mx-auto">
            Building Digital Experiences That Drive Results — modern, responsive websites and web
            applications built with cutting-edge technologies and industry best practices.
          </p>
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

        {/* FEATURED PROJECTS */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-center text-blue-200 mb-6">Featured Projects</h2>
          <p className="text-center text-gray-100/80 mb-8">Explore some of our recent web development masterpieces.</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featured.map((p, i) => (
              <div key={i} className="bg-white/85 rounded-2xl shadow-lg p-6">
                <div className="h-40 rounded-lg bg-gray-100 mb-4 flex items-center justify-center text-gray-400">
                  {/* placeholder image area */}
                  <span className="text-sm">Preview</span>
                </div>
                <h3 className="font-semibold text-lg">{p.title}</h3>
                <p className="text-sm text-gray-600 mt-2">{p.desc}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tech.map((t, k) => (
                    <span key={k} className="text-xs bg-gray-100 px-2 py-1 rounded">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* STATS ROW (element below Featured Projects you mentioned) */}
        <section className="mb-20">
          <div className="mx-auto max-w-4xl grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((s, i) => (
              <div
                key={i}
                className="bg-white/85 rounded-xl shadow-sm p-5 flex flex-col items-center text-center"
              >
                <div className="bg-white/60 rounded-full p-2 mb-3 inline-flex">
                  {s.icon}
                </div>
                <div className="text-xl font-bold">{s.value}</div>
                <div className="text-sm text-gray-600 mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="text-center py-12">
          <h2 className="text-3xl font-semibold text-white">Ready to Get Started?</h2>
          <p className="text-gray-100/80 mt-2">Let’s discuss your web development project and bring your creative vision to life.</p>
          <div className="mt-6 flex justify-center gap-4">
            <button className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg shadow">Get a Quote</button>
            <button className="px-6 py-3 bg-white/90 hover:bg-white text-gray-900 rounded-lg shadow">Schedule a Call</button>
          </div>
        </section>
      </div>
    </div>
  );
}
