export default function TimelineHighlights() {
  const events = [
    {
      id: 1,
      date: "2013",
      title: "Factory Established",
      description:
        "Integrated Energy Solutions factory was established to begin operations in sustainable energy.",
      icon: (
        <svg
          className="w-8 h-8 text-primary"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M12 6v6l4 2" />
        </svg>
      ),
    },
    {
      id: 2,
      date: "2016",
      title: "Fully Operational",
      description:
        "Operations expanded and the factory became fully functional, increasing production capacity.",
      icon: (
        <svg
          className="w-8 h-8 text-green-600"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M3 10h18" />
          <path d="M3 6h18" />
          <path d="M3 14h18" />
          <path d="M3 18h18" />
        </svg>
      ),
    },
    {
      id: 3,
      date: "2019",
      title: "Golden Partner Status",
      description:
        "Achieved GOLDEN Partner status with Schneider Electric, boosting our market presence.",
      icon: (
        <svg
          className="w-8 h-8 text-yellow-600"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polygon points="12 2 15 11 24 11 17 17 20 26 12 20 4 26 7 17 0 11 9 11 12 2" />
        </svg>
      ),
    },
    {
      id: 4,
      date: "2023",
      title: "Premier Partner",
      description:
        "Reached Premier Partner status with Schneider Electric, demonstrating leadership in energy solutions.",
      icon: (
        <svg
          className="w-8 h-8 text-red-600"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 2l4 8H8l4-8z" />
          <path d="M4 22h16" />
          <path d="M12 10v12" />
        </svg>
      ),
    },
  ];

  return (
    <section className="max-w-5xl mx-auto px-6 py-16">
      <h2 className="text-4xl font-bold text-center mb-14 text-gray-900">
        Our Journey
      </h2>

      <div className="relative border-l-4 border-primary/50 ml-6">
        {events.map(({ id, date, title, description, icon }, idx) => (
          <div
            key={id}
            data-aos="fade-right"
            data-aos-delay={idx * 150}
            className="mb-10 ml-8 flex items-start space-x-6"
          >
            {/* Icon */}
            <div className="bg-white border-4 border-primary rounded-full p-3 flex-shrink-0 shadow-lg">
              {icon}
            </div>

            {/* Content */}
            <div>
              <span className="text-sm font-semibold text-primary">
                {date}
              </span>
              <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
              <p className="text-gray-600 max-w-md mt-1">{description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
