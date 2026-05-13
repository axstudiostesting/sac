export default function Hero({ image, title, subtitle }) {
  return (
    <div
      className="relative w-full h-[60vh] md:h-[75vh] bg-center bg-cover flex items-center justify-center text-white"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="absolute inset-0 bg-black/50 z-10" />

      <div className="relative z-20 text-center px-4">
        <h1 className="text-3xl md:text-5xl font-bold mb-4 drop-shadow-md">
          {title}
        </h1>
        {subtitle && (
          <p className="text-md md:text-xl max-w-2xl mx-auto drop-shadow-sm">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
}
