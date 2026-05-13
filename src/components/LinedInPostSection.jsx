"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTranslation } from "@/hooks/useTranslation";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FiLinkedin,
  FiThumbsUp,
  FiMessageCircle,
  FiShare2,
  FiArrowRight,
  FiCalendar,
} from "react-icons/fi";

const LinkedInPostsSection = () => {
  const { isRTL } = useLanguage();
  const { t } = useTranslation();

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  // Sample LinkedIn posts - Replace with actual API data
  const posts = [
    {
      id: 1,
      title: "Exciting Partnership Announcement",
      description:
        "We're thrilled to announce our strategic partnership with leading technology providers to enhance our service offerings across the Kingdom.",
      image: "/h1b.jpg",
      date: "March 15, 2024",
      likes: 245,
      comments: 18,
      shares: 12,
      linkedinUrl: "https://linkedin.com/company/saudicall/posts/1",
    },
    {
      id: 2,
      title: "New Security Solutions Launch",
      description:
        "Introducing our cutting-edge AI-powered security systems designed to protect businesses with real-time threat detection and monitoring.",
      image: "/img2.jpg",
      date: "March 10, 2024",
      likes: 189,
      comments: 24,
      shares: 8,
      linkedinUrl: "https://linkedin.com/company/saudicall/posts/2",
    },
    {
      id: 3,
      title: "Expanding Our Team",
      description:
        "We're growing! Join our team of experts and be part of Saudi Arabia's digital transformation journey. Multiple positions available.",
      image: "/img3.jpg",
      date: "March 5, 2024",
      likes: 312,
      comments: 45,
      shares: 23,
      linkedinUrl: "https://linkedin.com/company/saudicall/posts/3",
    },
  ];

  return (
    <section className="relative w-full py-20 md:py-28 overflow-hidden bg-gradient-to-b from-gray-50 via-white to-gray-50">
      {/* Background Pattern Overlays */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `repeating-linear-gradient(45deg, #27374e 0px, #27374e 2px, transparent 2px, transparent 20px)`,
        }}
      />

      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #27374e 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Decorative Blur Elements */}
      <div className="absolute top-20 left-0 w-96 h-96 bg-primary/[0.02] rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-0 w-96 h-96 bg-primary/[0.02] rounded-full blur-3xl" />

      <div className="relative z-10 container mx-auto px-6 md:px-12 lg:px-20">
        {/* Section Title */}
        <div data-aos="fade-up">
          <div className="text-center mb-12 md:mb-16">
            <div className="inline-block mb-4">
              <span className="text-[#27374e] font-semibold text-sm md:text-base tracking-wider uppercase bg-[#27374e]/5 px-5 py-2 rounded-full border border-[#27374e]/10">
                Latest From LinkedIn
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              What's <span className="text-[#27374e]">New</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Stay updated with our latest news, announcements, and insights
              from LinkedIn
            </p>
            <div className="w-24 h-1 bg-[#27374e]/20 mx-auto mt-6 rounded-full"></div>
          </div>
        </div>

        {/* Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {posts.map((post, idx) => (
            <div
              key={post.id}
              data-aos="fade-up"
              data-aos-delay={idx * 100}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* LinkedIn Badge */}
                <div className="absolute top-4 right-4 bg-[#0077B5] rounded-full p-2 shadow-lg">
                  <FiLinkedin className="w-5 h-5 text-white" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Date */}
                <div className="flex items-center gap-2 text-gray-500 text-sm mb-3">
                  <FiCalendar className="w-4 h-4 text-[#27374e]" />
                  <span>{post.date}</span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#27374e] transition-colors duration-300 line-clamp-2">
                  {post.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {post.description}
                </p>

                {/* Engagement Stats */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1 text-gray-500 text-sm">
                      <FiThumbsUp className="w-4 h-4" />
                      <span>{post.likes}</span>
                    </div>
                    <div className="flex items-center gap-1 text-gray-500 text-sm">
                      <FiMessageCircle className="w-4 h-4" />
                      <span>{post.comments}</span>
                    </div>
                    <div className="flex items-center gap-1 text-gray-500 text-sm">
                      <FiShare2 className="w-4 h-4" />
                      <span>{post.shares}</span>
                    </div>
                  </div>

                  {/* LinkedIn Link */}
                  <Link href={post.linkedinUrl} target="_blank">
                    <button className="group/btn inline-flex items-center gap-1 text-[#0077B5] font-semibold text-sm hover:gap-2 transition-all duration-300">
                      View Post
                      <FiArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Follow Us on LinkedIn Button */}
        <div
          data-aos="fade-up"
          data-aos-delay="300"
          className="text-center mt-12"
        >
          <Link href="https://linkedin.com/company/saudicall" target="_blank">
            <button className="group inline-flex items-center gap-3 bg-[#0077B5] text-white px-8 py-3 rounded-xl font-semibold hover:bg-[#0077B5]/90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              <FiLinkedin className="w-5 h-5" />
              <span>Follow Us on LinkedIn</span>
              <FiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </Link>
        </div>

        {/* Bottom Decoration */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-3">
            <div className="w-16 h-[2px] bg-[#27374e]/20 rounded-full"></div>
            <div className="flex gap-1.5">
              <div className="w-2 h-2 bg-[#27374e]/40 rounded-full"></div>
              <div className="w-2 h-2 bg-[#27374e]/60 rounded-full"></div>
              <div className="w-2 h-2 bg-[#27374e]/80 rounded-full"></div>
              <div className="w-2 h-2 bg-[#27374e]/60 rounded-full"></div>
              <div className="w-2 h-2 bg-[#27374e]/40 rounded-full"></div>
            </div>
            <div className="w-16 h-[2px] bg-[#27374e]/20 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LinkedInPostsSection;
