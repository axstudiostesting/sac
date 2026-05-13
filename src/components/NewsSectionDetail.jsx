"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  FiCalendar,
  FiUser,
  FiShare2,
  FiArrowLeft,
  FiArrowRight,
  FiTag,
  FiClock,
} from "react-icons/fi";
import AOS from "aos";
import "aos/dist/aos.css";

const NewsDetail = ({ newsData }) => {
  const { isRTL } = useLanguage();
  const [relatedNews, setRelatedNews] = useState([]);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
    });
  }, []);

  // Sample related news - replace with actual data
  useEffect(() => {
    setRelatedNews([
      {
        id: 1,
        title: "Saudi Call Expands Operations",
        image: "/h1b.jpg",
        date: "March 10, 2024",
        link: "/news/2",
      },
      {
        id: 2,
        title: "New Partnership Announcement",
        image: "/img2.jpg",
        date: "March 5, 2024",
        link: "/news/3",
      },
      {
        id: 3,
        title: "Award for Excellence",
        image: "/img3.jpg",
        date: "February 28, 2024",
        link: "/news/4",
      },
    ]);
  }, []);

  // Sample data - replace with actual props
  const data = newsData || {
    title: "Saudi Call Launches Advanced Security Solutions",
    date: "March 15, 2024",
    author: "Admin",
    category: "News",
    readTime: "5 min read",
    image: "/h1b.jpg",
    content: `
      <p class="text-gray-600 leading-relaxed mb-6">Saudi Call, a leading provider of technology solutions in the Kingdom of Saudi Arabia, today announced the launch of its advanced security solutions designed to protect businesses with AI-powered monitoring and real-time threat detection.</p>
      
      <h2 class="text-2xl font-bold text-gray-900 mb-4 mt-8">Revolutionary Security Technology</h2>
      
      <p class="text-gray-600 leading-relaxed mb-6">The new security systems leverage artificial intelligence and machine learning algorithms to provide unprecedented protection against cyber threats and physical security breaches. This comprehensive solution integrates seamlessly with existing infrastructure, offering businesses a cost-effective way to enhance their security posture.</p>
      
      <div class="relative h-96 w-full my-8 rounded-xl overflow-hidden">
        <Image src="/img2.jpg" alt="Security Solutions" fill class="object-cover" />
      </div>
      
      <h2 class="text-2xl font-bold text-gray-900 mb-4 mt-8">Key Features</h2>
      
      <ul class="list-disc list-inside text-gray-600 leading-relaxed mb-6 space-y-2">
        <li>AI-powered real-time threat detection</li>
        <li>24/7 automated monitoring and alerts</li>
        <li>Seamless integration with existing systems</li>
        <li>Advanced analytics and reporting dashboard</li>
        <li>Cloud-based management platform</li>
      </ul>
      
      <p class="text-gray-600 leading-relaxed mb-6">"We are proud to introduce this cutting-edge solution to the Saudi market," said the CEO of Saudi Call. "Our team has worked tirelessly to develop a system that not only protects businesses but also provides actionable insights to help them grow securely."</p>
      
      <div class="bg-gray-50 p-6 rounded-xl my-8 border-l-4 border-primary">
        <p class="text-gray-700 italic">"This is a game-changer for businesses in KSA. The level of protection and intelligence offered is unmatched in the market."</p>
        <p class="text-primary font-semibold mt-2">— Industry Expert</p>
      </div>
      
      <p class="text-gray-600 leading-relaxed mb-6">The solution is now available for businesses across all sectors, with customized packages tailored to specific industry needs. Contact our team for a free consultation and demonstration.</p>
    `,
  };

  return (
    <section className="relative w-full py-12 md:py-16 overflow-hidden bg-gradient-to-b from-gray-50 via-white to-gray-50">
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `repeating-linear-gradient(45deg, #27374e 0px, #27374e 2px, transparent 2px, transparent 20px)`,
        }}
      />

      <div className="relative z-10 container mx-auto px-6 md:px-12 lg:px-20">
        {/* Back Button */}
        <div data-aos="fade-right" className="mb-8">
          <Link href="/news">
            <button className="inline-flex items-center gap-2 text-gray-600 hover:text-[#27374e] transition-colors">
              {isRTL ? (
                <FiArrowRight className="w-5 h-5" />
              ) : (
                <FiArrowLeft className="w-5 h-5" />
              )}
              Back to News
            </button>
          </Link>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div data-aos="fade-up">
              {/* Hero Image */}
              <div className="relative h-[300px] md:h-[400px] w-full rounded-2xl overflow-hidden mb-8">
                <Image
                  src={data.image}
                  alt={data.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Meta Info */}
              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-6 pb-6 border-b border-gray-200">
                <div className="flex items-center gap-2">
                  <FiCalendar className="w-4 h-4 text-[#27374e]" />
                  <span>{data.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <FiUser className="w-4 h-4 text-[#27374e]" />
                  <span>{data.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <FiTag className="w-4 h-4 text-[#27374e]" />
                  <span>{data.category}</span>
                </div>
                <div className="flex items-center gap-2">
                  <FiClock className="w-4 h-4 text-[#27374e]" />
                  <span>{data.readTime}</span>
                </div>
              </div>

              {/* Title */}
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                {data.title}
              </h1>

              {/* Content */}
              <div dangerouslySetInnerHTML={{ __html: data.content }} />

              {/* Share Section */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <div className="flex items-center gap-4">
                  <span className="text-gray-700 font-semibold">
                    Share this article:
                  </span>
                  <div className="flex gap-3">
                    <button className="w-10 h-10 bg-[#1DA1F2] rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform">
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 0021.997-11.024 9.87 9.87 0 002.2-2.285z" />
                      </svg>
                    </button>
                    <button className="w-10 h-10 bg-[#0077B5] rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform">
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451c.979 0 1.771-.773 1.771-1.729V1.729C24 .774 23.204 0 22.225 0z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Related News */}
            <div
              data-aos="fade-left"
              className="bg-white rounded-2xl p-6 shadow-md sticky top-24"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-6 pb-3 border-b border-gray-200">
                Related Articles
              </h3>
              <div className="space-y-6">
                {relatedNews.map((item, idx) => (
                  <Link key={item.id} href={item.link}>
                    <div className="group flex gap-4 cursor-pointer">
                      <div className="relative w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 mb-1">
                          {item.date}
                        </p>
                        <h4 className="text-sm font-semibold text-gray-900 group-hover:text-[#27374e] transition-colors line-clamp-2">
                          {item.title}
                        </h4>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>

              {/* Newsletter */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <h4 className="text-base font-bold text-gray-900 mb-3">
                  Subscribe to Newsletter
                </h4>
                <p className="text-sm text-gray-500 mb-4">
                  Get the latest updates straight to your inbox
                </p>
                <div className="flex gap-2">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="flex-1 px-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:border-primary"
                  />
                  <button className="px-4 py-2 bg-[#27374e] text-white text-sm rounded-lg hover:bg-[#27374e]/90 transition-colors">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsDetail;
