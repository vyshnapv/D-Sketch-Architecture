function Home() {
  return (
    <section
      id="home"
      className="relative h-screen bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c')",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="max-w-7xl mx-auto px-6 w-full -mt-10">
          <p className="text-amber-400 uppercase tracking-[5px] mb-5 font-medium">
            Architecture & Interior Design
          </p>

          <h1 className="text-white text-5xl md:text-7xl font-bold leading-tight max-w-4xl">
            Designing Spaces That Inspire
          </h1>

          <p className="text-gray-200 text-lg mt-6 max-w-2xl leading-relaxed">
            Transforming ideas into timeless architecture, elegant interiors,
            and innovative living spaces.
          </p>

          {/* Premium Buttons */}
          <div className="flex flex-wrap gap-6 mt-10">
  {/* View Projects Button */}
  <button className="group relative overflow-hidden px-20 py-7 min-w-[260px] rounded-full border-2 border-white text-white font-medium text-base backdrop-blur-sm bg-white/10 transition-all duration-500 hover:bg-white hover:text-black hover:scale-105 hover:shadow-xl">
    <span className="relative z-10 flex items-center justify-center gap-2">
      View Projects
    </span>

    <span className="absolute top-0 left-[-100%] w-full h-full bg-white/20 skew-x-12 transition-all duration-700 group-hover:left-[120%]"></span>
  </button>

  {/* Contact Button */}
  <button className="group px-20 py-7 min-w-[260px] rounded-full border-2 border-white text-white font-medium text-base backdrop-blur-sm bg-white/10 transition-all duration-500 hover:bg-white hover:text-black hover:scale-105 hover:shadow-xl">
    <span className="flex items-center justify-center gap-2">
      Contact Us
    </span>
  </button>
</div>
        </div>
      </div>
    </section>
  );
}

export default Home;