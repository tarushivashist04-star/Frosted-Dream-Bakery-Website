import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";

const slides = [
  {
    image: "/Images/Background.avif",
    title: "Frosted Dreams",
    subtitle: "India’s #1 Bakery Experience",
    desc: "Experience fresh & delicious baked goods delivered to your doorstep."
  },
  {
    image: "/Images/Cake.webp",
    title: "Freshly Baked Cakes",
    subtitle: "Sweet Moments Await",
    desc: "Indulge in handcrafted cakes made with love and premium ingredients."
  },
  {
    image: "/Images/Cinnamon Roll.jpg", 
    title: "Warm & Delicious",
    subtitle: "Taste the Comfort",
    desc: "Every bite feels like home with our freshly baked delights."
  },
  {
    image: "/Images/Muffinc.jpg",
    title: "Fresh Muffins",
    subtitle: "Soft & Delicious",
    desc: "Enjoy freshly baked muffins with rich flavors and a soft, fluffy texture."
  }
];

const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">

      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        loop={true}
        className="h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>

            <div className="relative h-screen w-full flex items-center justify-center text-center overflow-hidden">

              {/* Background Image */}
              <div className="absolute inset-0">
                <img
                  src={slide.image}
                  alt="hero"
                  className="w-full h-full object-cover scale-105"
                />

                {/* DARK OVERLAY */}
                <div className="absolute inset-0 bg-black/60"></div>

                {/* ORANGE GRADIENT */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#c26a2e]/40 via-transparent to-black/50"></div>

                {/* VIGNETTE */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,black_85%)]"></div>

                {/* BLUR */}
                <div className="absolute inset-0 backdrop-blur-[2px]"></div>
              </div>

              {/* CONTENT */}
              <div className="relative z-10 px-4 max-w-3xl">

                {/* ✅ ADDED SINCE BADGE (DARK STYLE) */}
                <div className="mb-4">
                  <span className="px-4 py-1 text-sm bg-black/70 border border-[#D97745]/40 text-[#D97745] rounded-full tracking-wider">
                    SINCE 1980
                  </span>
                </div>
                
                <h1 className="text-white text-4xl md:text-6xl font-bold leading-tight">
                  {slide.title}
                </h1>

                <h2 className="text-bakery-orange text-2xl md:text-4xl mt-4 font-semibold">
                  {slide.subtitle}
                </h2>

                <p className="text-gray-300 mt-6 text-lg">
                  {slide.desc}
                </p>

                {/* Buttons */}
                <div className="flex justify-center gap-4 mt-8">
                  
                  <a
                    href="#menu"
                    className="bg-[#D97745] hover:bg-[#c4683c] text-white px-6 py-3 rounded-md font-medium transition"
                  >
                    View Menu
                  </a>

                </div>

               <div className="mt-8 flex justify-center">
  <a href="#menu" className="group">

    <svg
      className="w-10 h-10 md:w-12 md:h-12 text-gray-300 group-hover:text-[#D97745] transition animate-bounce"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      viewBox="0 0 24 24"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6" />
    </svg>

  </a>
</div>

              </div>
            </div>

          </SwiperSlide>
        ))}
      </Swiper>

    </section>
  );
};

export default Hero;