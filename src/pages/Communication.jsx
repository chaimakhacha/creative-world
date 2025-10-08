import React from "react";
import {
  Check,
  MessageSquare,
  Megaphone,
  FileText,
  Users,
  Zap,
  ChartBar,
  Pencil,
  Share2,
  Eye,
  Target,
} from "lucide-react";
import { motion } from "framer-motion";

const offers = [
  { title: "Brand Messaging" },
  { title: "Content Strategy" },
  { title: "Social Media Management" },
  { title: "PR & Media Relations" },
  { title: "Crisis Communication" },
  { title: "Internal Communications" },
];

const processSteps = [
  {
    title: "Strategy",
    desc: "Developing communication strategy and goals",
    icon: Target,
  },
  {
    title: "Planning",
    desc: "Content calendar and channel planning",
    icon: FileText,
  },
  {
    title: "Creation",
    desc: "Content creation and messaging development",
    icon: Pencil,
  },
  {
    title: "Distribution",
    desc: "Multi-channel content distribution",
    icon: Share2,
  },
  {
    title: "Engagement",
    desc: "Community management and interaction",
    icon: Users,
  },
  {
    title: "Analysis",
    desc: "Performance tracking and optimization",
    icon: ChartBar,
  },
];

export default function Communication() {
  return (
    <div className="relative min-h-screen text-white overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        {/* HEADER */}
        <motion.header
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="flex justify-center mb-6">
            <div className="bg-teal-500/20 p-4 rounded-full inline-flex border border-teal-400/30">
              <MessageSquare size={36} className="text-teal-400" />
            </div>
          </div>
          <h1 className="text-5xl font-extrabold text-white tracking-tight">
            Communication
          </h1>
          <p className="mt-4 text-lg text-white/90 max-w-2xl mx-auto">
            Strategic communication that connects and converts through
            multi-channel campaigns and engaging content.
          </p>
        </motion.header>

        {/* WHAT WE OFFER */}
        <section className="mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl font-semibold text-center text-teal-300 mb-6"
          >
            What We Offer
          </motion.h2>

          <p className="text-center text-gray-100/80 mb-10">
            Comprehensive communication solutions tailored to your unique needs
            and vision.
          </p>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {offers.map((o, i) => (
              <motion.article
                key={i}
                whileHover={{ scale: 1.03 }}
                className="bg-white/90 rounded-2xl shadow-lg p-6 relative overflow-hidden"
              >
                <div className="absolute -top-3 right-6 w-20 h-2 rounded-md bg-gradient-to-r from-teal-300 to-teal-500" />
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-lg flex items-center justify-center border border-teal-100 bg-teal-50/80">
                    <Check size={18} className="text-teal-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-teal-700 text-[22px] font-semibold">
                      {o.title}
                    </h3>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </section>

        {/* OUR CREATIVE PROCESS */}
        <section className="mb-24">
          <h2 className="text-3xl font-semibold text-center text-teal-300 mb-6">
            Our Creative Process
          </h2>
          <p className="text-center text-gray-100/80 mb-10">
            Our strategic workflow ensures effective and consistent communication across channels.
          </p>

          <div className="relative">
            {/* central vertical rod */}
            <div className="absolute left-1/2 transform -translate-x-1/2 top-6 bottom-6 w-[2px] bg-gradient-to-b from-teal-400/60 to-transparent" />

            <div className="space-y-12">
              {processSteps.map((step, idx) => {
                const isLeft = idx % 2 === 0;
                const Icon = step.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: isLeft ? -100 : 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="relative"
                  >
                    {/* Center circle */}
                    <div
                      className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 hidden md:block"
                      aria-hidden
                    >
                      <div className="w-5 h-5 rounded-full bg-teal-400 border-4 border-teal-200 shadow-sm" />
                    </div>

                    <div
                      className={`flex flex-col md:flex-row items-center ${
                        isLeft ? "md:justify-start" : "md:justify-end"
                      }`}
                    >
                      {/* Left Side */}
                      <div
                        className={`w-full md:w-1/2 ${
                          isLeft ? "md:mr-16" : "md:ml-16"
                        }`}
                      >
                        {isLeft && (
                          <div className="bg-white/90 rounded-xl p-6 shadow-md">
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 rounded-md flex items-center justify-center bg-teal-50 border">
                                <Icon size={18} className="text-teal-600" />
                              </div>
                              <div>
                                <h4 className="font-semibold text-teal-700">
                                  {step.title}
                                </h4>
                                <p className="text-sm text-gray-600 mt-1">
                                  {step.desc}
                                </p>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Right Side */}
                      <div
                        className={`w-full md:w-1/2 ${
                          isLeft ? "md:pl-16" : "md:pr-16"
                        }`}
                      >
                        {!isLeft && (
                          <div className="bg-white/90 rounded-xl p-6 shadow-md">
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 rounded-md flex items-center justify-center bg-teal-50 border">
                                <Icon size={18} className="text-teal-600" />
                              </div>
                              <div>
                                <h4 className="font-semibold text-teal-700">
                                  {step.title}
                                </h4>
                                <p className="text-sm text-gray-600 mt-1">
                                  {step.desc}
                                </p>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
