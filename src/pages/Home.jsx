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
            
            {/* View Projects Button */}
            <button className="group relative overflow-hidden px-10 py-4 min-w-[180px] rounded-full border-2 border-white text-white font-medium text-sm backdrop-blur-sm bg-white/10 transition-all duration-500 hover:bg-white hover:text-black hover:scale-105 hover:shadow-xl">
              <span className="relative z-10 flex items-center justify-center">
                View Projects
              </span>

              <span className="absolute top-0 left-[-100%] w-full h-full bg-white/20 skew-x-12 transition-all duration-700 group-hover:left-[120%]"></span>
            </button>

            {/* Contact Button */}
            <button className="group px-10 py-4 min-w-[180px] rounded-full border-2 border-white text-white font-medium text-sm backdrop-blur-sm bg-white/10 transition-all duration-500 hover:bg-white hover:text-black hover:scale-105 hover:shadow-xl">
              <span className="flex items-center justify-center">
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