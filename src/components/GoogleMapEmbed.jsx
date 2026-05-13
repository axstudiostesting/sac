export default function GoogleMapEmbed() {
  return (
    <section className="py-16 px-4 md:px-10 lg:px-20">
      <div className="max-w-6xl mx-auto rounded-2xl overflow-hidden shadow-lg">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!..." // Replace with your actual embed link
          width="100%"
          height="450"
          allowFullScreen=""
          loading="lazy"
          className="w-full border-none"
        ></iframe>
      </div>
    </section>
  );
}
