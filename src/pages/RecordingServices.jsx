import React from "react";
import {
  Mic,
  Music,
  Headphones,
  SlidersHorizontal,
  AudioWaveform,
  Check,
  Calendar,
  Wrench,
  Scissors,
  SlidersVertical,
  Disc,
} from "lucide-react";
import { motion } from "framer-motion";

const offers = [
  { title: "Music Recording & Production", icon: Music },
  { title: "Podcast Recording", icon: Mic },
  { title: "Voice-over Recording", icon: Headphones },
  { title: "Audio Mixing & Mastering", icon: SlidersHorizontal },
  { title: "Sound Design", icon: AudioWaveform },
  { title: "Multi-track Recording", icon: Check },
];

const processSteps = [
  { title: "Pre-Production", desc: "Planning and script review", icon: Calendar },
  { title: "Set Up", desc: "Studio preparation and equipment setup", icon: Wrench },
  { title: "Editing", desc: "Audio editing and cleanup", icon: Scissors },
  { title: "Mixing", desc: "Professional mixing and balancing", icon: SlidersVertical },
  { title: "Mastering", desc: "Final mastering and delivery", icon: Disc },
];

export default function RecordingServices() {
  return (
    <div className="relative min-h-screen text-gray-900">
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        {/* HEADER */}
        <header className="text-center mb-20">
          <div className="flex justify-center mb-6">
            <div className="bg-white/10 p-4 rounded-full inline-flex">
              <Mic size={36} className="text-white" />
            </div>
          </div>
          <h1 className="text-5xl font-extrabold text-white tracking-tight">
            Recording Services
          </h1>
          <p className="mt-4 text-lg text-white/90 max-w-2xl mx-auto">
            Professional audio recording services for music, podcasts, voiceovers,
            and multimedia projects using state-of-the-art equipment.
          </p>
        </header>

        {/* WHAT WE OFFER */}
        <section className="mb-24">
          <h2 className="text-3xl font-semibold text-center text-purple-200 mb-6">
            What We Offer
          </h2>
          <p className="text-center text-gray-100/80 mb-10">
            Comprehensive recording service solutions tailored to your unique needs
            and creative vision.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {offers.map((o, i) => {
              const Icon = o.icon;
              return (
                <motion.article
                  key={i}
                  className="relative"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.15, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <div className="absolute -top-3 right-6 w-20 h-2 rounded-md shadow-sm bg-purple-500" />
                  <div className="bg-white/85 rounded-2xl shadow-lg p-6 min-h-[120px] relative overflow-hidden">
                    <div className="flex items-start gap-4">
                      <div className="w-11 h-11 rounded-lg flex items-center justify-center border border-purple-100 bg-purple-50/80">
                        <Icon size={20} className="text-purple-600" />
                      </div>

                      <div className="flex-1">
                        <h3 className="text-purple-700 text-[20px] font-semibold">
                          {o.title}
                        </h3>
                      </div>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </section>

        {/* OUR CREATIVE PROCESS */}
        <section className="mb-24">
          <h2 className="text-3xl font-semibold text-center text-purple-200 mb-6">
            Our Creative Process
          </h2>
          <p className="text-center text-gray-100/80 mb-10">
            Our proven artistic methodology ensures exceptional results for every
            project.
          </p>

          <div className="relative">
            {/* central vertical rod */}
            <div className="absolute left-1/2 transform -translate-x-1/2 top-6 bottom-6 w-[2px] bg-gradient-to-b from-white/40 to-transparent" />

            <div className="space-y-12">
              {processSteps.map((step, idx) => {
                const isLeft = idx % 2 === 0;
                const Icon = step.icon;
                return (
                  <motion.div
                    key={idx}
                    className="relative"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.2, duration: 0.7 }}
                    viewport={{ once: true }}
                  >
                    {/* the center circle */}
                    <div
                      className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 hidden md:block"
                      aria-hidden
                    >
                      <div className="w-5 h-5 rounded-full bg-white border-4 border-purple-300 shadow-sm" />
                    </div>

                    <div
                      className={`flex flex-col md:flex-row items-center ${
                        isLeft ? "md:justify-start" : "md:justify-end"
                      }`}
                    >
                      {/* LEFT side */}
                      <div
                        className={`w-full md:w-1/2 ${
                          isLeft ? "md:mr-16" : "md:ml-16"
                        }`}
                      >
                        {isLeft && (
                          <div className="bg-white/90 rounded-xl p-6 shadow-md">
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 rounded-md flex items-center justify-center bg-purple-50 border">
                                <Icon size={18} className="text-purple-600" />
                              </div>
                              <div>
                                <h4 className="font-semibold text-purple-700">
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

                      {/* spacer */}
                      <div className="hidden md:block w-[2px]" />

                      {/* RIGHT side */}
                      <div
                        className={`w-full md:w-1/2 ${
                          isLeft ? "md:pl-16" : "md:pr-16"
                        }`}
                      >
                        {!isLeft && (
                          <div className="bg-white/90 rounded-xl p-6 shadow-md">
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 rounded-md flex items-center justify-center bg-purple-50 border">
                                <Icon size={18} className="text-purple-600" />
                              </div>
                              <div>
                                <h4 className="font-semibold text-purple-700">
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
