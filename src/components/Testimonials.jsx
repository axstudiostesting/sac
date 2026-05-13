"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const testimonials = [
  {
    name: "Sarah Al-Qahtani",
    role: "Project Manager, Aramco",
    message:
      "Working with SES was a game-changer. Their solutions are reliable and the team’s support is outstanding.",
  },
  {
    name: "Mohammed Al-Faraj",
    role: "CTO, GreenTech Energy",
    message:
      "They delivered beyond expectations. The innovation and execution were truly impressive.",
  },
  {
    name: "Ayesha Kareem",
    role: "Operations Head, FutureGrid",
    message:
      "Their approach to sustainability and dedication to client success is unmatched.",
  },
];

export default function Testimonials() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className="py-20 bg-white px-4 md:px-10 lg:px-20">
      <div className="text-center mb-14" data-aos="fade-up">
        <h2 className="text-4xl font-bold text-gray-900 mb-2">
          What Our Clients Say
        </h2>
        <p className="text-gray-600 text-lg">
          Real feedback from our trusted partners
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className="bg-gray-50 border border-gray-200 p-6 rounded-lg shadow-sm hover:shadow-md transition"
            data-aos="fade-up"
            data-aos-delay={i * 100}
          >
            <p className="italic text-gray-700 mb-4">"{t.message}"</p>
            <div>
              <p className="text-gray-900 font-semibold">{t.name}</p>
              <p className="text-gray-500 text-sm">{t.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
