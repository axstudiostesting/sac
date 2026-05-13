export default function FeaturesShowcase() {
  return (
    <section className="bg-gray-50 py-16 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto rounded-lg shadow-lg">
      <h2 className="text-4xl font-extrabold text-center mb-12 text-gray-900">
        Why Choose Integrated Energy Solutions?
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Feature 1 */}
        <div
          data-aos="fade-up"
          className="bg-white rounded-lg p-6 flex flex-col items-center text-center shadow-md hover:shadow-xl transition-shadow duration-300"
        >
          <div className="text-green-500 mb-4">
            <svg
              className="w-14 h-14 mx-auto"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5z" />
              <path d="M2 17l10 5 10-5" />
              <path d="M2 12l10 5 10-5" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold mb-2 text-gray-900">
            Innovative Technology
          </h3>
          <p className="text-gray-600">
            Leveraging cutting-edge tech to deliver efficient and sustainable
            energy solutions tailored to your needs.
          </p>
        </div>

        {/* Feature 2 */}
        <div
          data-aos="fade-up"
          data-aos-delay="100"
          className="bg-white rounded-lg p-6 flex flex-col items-center text-center shadow-md hover:shadow-xl transition-shadow duration-300"
        >
          <div className="text-primary mb-4">
            <svg
              className="w-14 h-14 mx-auto"
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
          </div>
          <h3 className="text-xl font-semibold mb-2 text-gray-900">
            Reliable Performance
          </h3>
          <p className="text-gray-600">
            Solutions designed for longevity and consistent performance to keep
            your energy flowing without interruption.
          </p>
        </div>

        {/* Feature 3 */}
        <div
          data-aos="fade-up"
          data-aos-delay="200"
          className="bg-white rounded-lg p-6 flex flex-col items-center text-center shadow-md hover:shadow-xl transition-shadow duration-300"
        >
          <div className="text-primary mb-4">
            <svg
              className="w-14 h-14 mx-auto"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M3 12l2-2 4 4 8-8 2 2-10 10z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold mb-2 text-gray-900">
            Sustainable Practices
          </h3>
          <p className="text-gray-600">
            Committed to green energy initiatives that reduce carbon footprint
            and promote environmental stewardship.
          </p>
        </div>

        {/* Feature 4 */}
        <div
          data-aos="fade-up"
          data-aos-delay="300"
          className="bg-white rounded-lg p-6 flex flex-col items-center text-center shadow-md hover:shadow-xl transition-shadow duration-300"
        >
          <div className="text-red-500 mb-4">
            <svg
              className="w-14 h-14 mx-auto"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 20h9" />
              <path d="M12 4h9" />
              <path d="M4 12h16" />
              <path d="M6 16l-4-4 4-4" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold mb-2 text-gray-900">
            Expert Support
          </h3>
          <p className="text-gray-600">
            Dedicated team providing top-notch support and guidance every step
            of the way.
          </p>
        </div>
      </div>
    </section>
  );
}
