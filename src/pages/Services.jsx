import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

function Services() {
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
    <section className="bg-[#F8F7F4] py-24 overflow-hidden">
      {/* Heading */}

     <div className="text-center mb-16 px-5" style={{ paddingTop: "40px" }}>
        <p className="uppercase tracking-[7px] text-amber-800 text-sm font-medium mt-6">
          What We Offer
        </p>

        <h2 className="text-5xl font-bold text-slate-900 mt-4">
          Our Services
        </h2>

        <p className="max-w-2xl mx-auto mt-6 text-slate-500 leading-8 text-center italic font-serif tracking-wide text-[17px]">
           We provide complete architecture, interior design and construction
             services under one roof.
        </p>
      </div>

      {/* Carousel */}

      <Swiper 
        modules={[Autoplay, Navigation]}
        navigation
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop
        spaceBetween={30}
        breakpoints={{
          320: {
            slidesPerView: 1.1,
          },
          768: {
            slidesPerView: 2.2,
          },
          1024: {
            slidesPerView: 3.2,
          },
        }}
        className="px-8 pb-12"
      >
        {services.map((service, index) => (
          <SwiperSlide key={index}>
            <div className="group relative overflow-hidden rounded-3xl h-[500px] cursor-pointer">
              {/* Image */}

              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
              />

              {/* Overlay */}

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent"></div>

              {/* Content */}

              <div className="absolute bottom-0 p-8 text-white">
                <span className="text-amber-400 text-sm tracking-[4px]">
                  0{index + 1}
                </span>

                <h3 className="text-3xl font-bold mt-2">
                  {service.title}
                </h3>

                <p className="mt-4 text-gray-300 leading-7">
                  {service.desc}
                </p>

                <button className="mt-6 bg-amber-500 hover:bg-amber-600 px-6 py-3 rounded-full transition">
                  Learn More
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default Services;