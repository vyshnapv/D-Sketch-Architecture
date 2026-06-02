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
        <div className="max-w-4xl mx-auto px-6 text-center">
          
          {/* Subtitle */}
          <p className="text-amber-400 uppercase tracking-[4px] mb-4 font-medium text-sm md:text-base">
            Architecture & Interior Design
          </p>

          {/* Heading */}
          <h1 className="text-white text-3xl md:text-5xl font-bold leading-tight">
            Designing Spaces That Inspire
          </h1>

          {/* Description */}
          <p className="text-gray-200 text-base md:text-lg mt-4 max-w-2xl mx-auto leading-relaxed">
            Transforming ideas into timeless architecture, elegant interiors,
            and innovative living spaces.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            {/* Our Services Button */}
            <a
              href="#services"
              className="inline-flex items-center justify-center px-10 py-4 min-w-[180px] bg-[#d97706] border-2 border-[#d97706] rounded-md text-white font-semibold text-sm uppercase tracking-wider transition-all duration-300 hover:bg-[#b45309] hover:border-[#b45309] hover:scale-105 hover:shadow-lg"
            >
              Our Services
            </a>

            {/* Contact Button */}
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-10 py-4 min-w-[180px] bg-white/10 border-2 border-white/30 rounded-md text-white font-semibold text-sm uppercase tracking-wider backdrop-blur-sm transition-all duration-300 hover:bg-white hover:text-slate-900 hover:scale-105 hover:shadow-lg"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;