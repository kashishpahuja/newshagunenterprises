'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

export default function HeroBanner() {
  // 🎯 Your static banner array
  const banners = [
    {
      desktopImage: "/Images/1.jpg", // desktop
      mobileImage: "/Images/1.jpg",  // mobile
      title: "Ergo Sofa Collection",
      subtitle: "Relax, make yourself comfortable, and sink into your new favourite spot.",
      buttonLabel: "Shop Now",
    },
    {
      desktopImage: "/Images/2.jpg", // desktop
      mobileImage: "/Images/2.jpg",  // mobile
      title: "Modern Home Crafted",
      subtitle: "Beautifully crafted furniture that elevates your living experience.",
      buttonLabel: "Shop Now",
    },
  ];

  return (
    <section className="relative w-full">
      <Swiper
        modules={[Pagination, Autoplay, EffectFade]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop
        className="w-full relative h-[300px] md:h-[700px]"
      >
        {banners.map((banner, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full">

              {/* 📱 Mobile Image */}
              <img
                src={banner.mobileImage}
                alt="Mobile Banner"
                className="block lg:hidden w-full h-full object-cover"
              />

              {/* 🖥 Desktop Image */}
              <img
                src={banner.desktopImage}
                alt="Desktop Banner"
                className="hidden lg:block w-full h-full object-cover"
              />

              {/* ⭐ Overlay Content */}
              <div className="absolute inset-0 flex flex-col justify-center items-center px-6 md:px-16 bg-black/30">
                <h2 className="text-white text-3xl md:text-5xl font-serif font-semibold drop-shadow-lg">
                  {banner.title}
                </h2>

                <p className="text-white text-md md:text-xl mt-6 text-center drop-shadow-lg max-w-2xl">
                  {banner.subtitle}
                </p>

                {/* ✨ Animated button from Uiverse */}
                <button
                  className="cursor-pointer mt-6 bg-white text-black 
        px-6 py-3 
                  font-medium group w-fit"
                >
                  <div className="relative overflow-hidden">
                    <p className="flex items-center group-hover:-translate-y-7 duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)]">
                      {banner.buttonLabel}
                    </p>
                    <p className="absolute top-7 left-0 group-hover:top-0 duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)]">
                      {banner.buttonLabel}
                    </p>
                  </div>
                </button>
              </div>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
