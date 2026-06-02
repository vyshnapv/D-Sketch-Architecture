import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { useRef } from "react";

import "swiper/css";
import "swiper/css/navigation";

function Services() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const services = [
    {
      title: "Architects",
      image:
        "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?w=1200",
      desc: "Innovative architectural solutions from concept to completion.",
    },
    {
      title: "Interior Designers",
      image:
        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1200",
      desc: "Luxury interiors crafted with beauty and functionality.",
    },
    {
      title: "Builders",
      image:
        "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1200",
      desc: "Reliable construction services with premium quality.",
    },
    {
      title: "3D Visualization",
      image:
        "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1200",
      desc: "See your dream project before construction starts.",
    },
    {
      title: "Decorators",
      image:
        "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=1200",
      desc: "Transforming spaces with style and personality.",
    },
  ];

  return (
    <section id="services" className="bg-[#F8F7F4] pt-16 sm:pt-20 md:pt-24 pb-12 sm:pb-16 md:pb-20 overflow-visible">
      {/* Heading */}
      <div className="text-center mb-12 px-4 sm:px-6 md:px-8" style={{ paddingTop: "24px", paddingBottom: "24px" }}>
        <p className="uppercase tracking-[7px] text-amber-800 text-sm font-medium mt-6">
          What We Offer
        </p>

        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mt-4">
          Our Services
        </h2>
        <p className="text-gray-600 text-sm sm:text-base leading-7 sm:leading-8 font-light text-center">
          We deliver innovative architectural, interior design, construction,
          and visualization solutions tailored to create beautiful and functional spaces.
        </p>
      </div>

      {/* Carousel */}
      <div className="relative px-4 sm:px-10">
        {/* Custom Prev Button */}
        <button
          ref={prevRef}
          aria-label="Previous slide"
          className="services-nav-btn services-nav-prev"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>

        {/* Custom Next Button */}
        <button
          ref={nextRef}
          aria-label="Next slide"
          className="services-nav-btn services-nav-next"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>

        <Swiper
          modules={[Autoplay, Navigation]}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onSwiper={(swiper) => {
            // Re-assign after refs are ready
            setTimeout(() => {
              if (swiper.params && swiper.params.navigation) {
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
                swiper.navigation.destroy();
                swiper.navigation.init();
                swiper.navigation.update();
              }
            });
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          loop
          spaceBetween={20}
          centeredSlides={false}
          breakpoints={{
            320: {
              slidesPerView: 1,
              centeredSlides: true,
              spaceBetween: 16,
            },
            480: {
              slidesPerView: 1.15,
              centeredSlides: true,
              spaceBetween: 16,
            },
            640: {
              slidesPerView: 1.6,
              centeredSlides: false,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2.2,
              centeredSlides: false,
              spaceBetween: 24,
            },
            1024: {
              slidesPerView: 3.2,
              centeredSlides: false,
              spaceBetween: 28,
            },
            1280: {
              slidesPerView: 3.8,
              centeredSlides: false,
              spaceBetween: 30,
            },
            1536: {
              slidesPerView: 4.2,
              centeredSlides: false,
              spaceBetween: 30,
            },
          }}
          className="pb-10"
        >
          {services.map((service, index) => (
            <SwiperSlide key={index} style={{ height: "auto" }}>
              <div className="group relative overflow-hidden rounded-2xl h-[340px] sm:h-[400px] lg:h-[460px] cursor-pointer shadow-lg transition-all duration-500 hover:shadow-2xl hover:-translate-y-1">
                {/* Image */}
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/30 to-transparent"></div>

                {/* Full-width Glassmorphic Text Panel at the bottom */}
                <div className="absolute bottom-0 inset-x-0 py-5 px-6 sm:py-6 sm:px-10 bg-white/10 backdrop-blur-lg border-t border-white/20 flex flex-col justify-end items-center text-center transition-all duration-300 group-hover:bg-white/15">
                  {/* Number & Indicator Centered */}
                  <div className="flex items-center justify-center gap-3 mb-2 w-full">
                    <div className="w-4 h-[1.5px] bg-amber-500 transition-all duration-300 group-hover:w-8"></div>
                    <span className="text-xs font-mono tracking-widest text-amber-500 uppercase font-semibold">
                      0{index + 1}
                    </span>
                    <div className="w-4 h-[1.5px] bg-amber-500 transition-all duration-300 group-hover:w-8"></div>
                  </div>

                  {/* Title */}
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-white mb-2 tracking-wide leading-tight group-hover:text-amber-500 transition-colors duration-300 w-full">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs text-slate-300 leading-relaxed font-light mt-1 pt-2 border-t border-white/10 w-full">
                    {service.desc}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Custom nav + swiper overrides */}
      <style>{`
        /* Custom Navigation Buttons */
        .services-nav-btn {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          z-index: 10;
          width: 44px;
          height: 44px;
          border-radius: 50%;
          border: 1.5px solid rgba(217, 119, 6, 0.4);
          background: rgba(255, 255, 255, 0.95);
          color: #d97706;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          box-shadow: 0 4px 16px rgba(0,0,0,0.10);
          transition: background 0.25s, color 0.25s, border-color 0.25s, box-shadow 0.25s, transform 0.25s;
        }
        .services-nav-btn svg {
          width: 20px;
          height: 20px;
        }
        .services-nav-prev {
          left: 4px;
        }
        .services-nav-next {
          right: 4px;
        }
        .services-nav-btn:hover {
          background: #d97706;
          color: white;
          border-color: #d97706;
          box-shadow: 0 6px 24px rgba(217,119,6,0.30);
          transform: translateY(-50%) scale(1.08);
        }
        .services-nav-btn:disabled,
        .services-nav-btn.swiper-button-disabled {
          opacity: 0.35;
          pointer-events: none;
        }

        @media (min-width: 640px) {
          .services-nav-btn {
            width: 52px;
            height: 52px;
          }
          .services-nav-btn svg {
            width: 22px;
            height: 22px;
          }
          .services-nav-prev { left: 8px; }
          .services-nav-next { right: 8px; }
        }

        /* Hide default Swiper arrows */
        .swiper-button-next, .swiper-button-prev {
          display: none !important;
        }
      `}</style>

      <div className="h-12 bg-[#F8F7F4]"></div>
    </section>
  );
}

export default Services;