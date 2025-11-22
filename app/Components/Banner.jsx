'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

export default function Banner() {

  // Sample static banners (desktop + mobile + text)
  const banners = [
    {
      desktopImage:
        "https://images.unsplash.com/photo-1505699614946-1c4422bb6f67?auto=format&fit=crop&w=1600&q=80",
      mobileImage:
        "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=80",
      title: "Save 25% on Tables",
      subtitle: "Relax and enjoy premium designs for your home.",
      buttonLabel: "Shop Now",
    },
    {
      desktopImage:
        "https://images.unsplash.com/photo-1501045661006-fcebe0257c3f?auto=format&fit=crop&w=1600&q=80",
      mobileImage:
        "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=800&q=80",
      title: "Premium Chairs Collection",
      subtitle: "Comfort and style crafted for modern living.",
      buttonLabel: "Shop Now",
    },
    {
      desktopImage:
        "https://images.unsplash.com/photo-1616628182501-f8e9aee0d593?auto=format&fit=crop&w=1600&q=80",
      mobileImage:
        "https://images.unsplash.com/photo-1551298370-9d5dd0f6f081?auto=format&fit=crop&w=800&q=80",
      title: "New Home Decor Arrivals",
      subtitle: "Transform your space with minimal stylish decor.",
      buttonLabel: "Shop Now",
    },
  ];

  return (
    <section className="relative w-full">
      <Swiper
        modules={[Pagination, Autoplay, EffectFade]}
        effect="fade"
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop={true}
        className="w-full relative min-h-[300px] md:h-[650px]"
      >
        {banners.map((banner, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full">

              {/* MOBILE IMAGE */}
              <img
                src={banner.mobileImage}
                className="block lg:hidden w-full h-full object-cover"
                alt="Mobile Banner"
              />

              {/* DESKTOP IMAGE */}
              <img
                src={banner.desktopImage}
                className="hidden lg:block w-full h-full object-cover"
                alt="Desktop Banner"
              />

              {/* ABSOLUTE TEXT CONTENT */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
                <h1 className="text-white text-3xl md:text-5xl font-light drop-shadow-lg">
                  {banner.title}
                </h1>

                <p className="text-white mt-3 text-lg md:text-xl font-light drop-shadow-lg">
                  {banner.subtitle}
                </p>

                <button className="mt-6 px-8 py-3 text-sm md:text-base bg-white text-black font-medium rounded-md shadow hover:bg-black hover:text-white transition-all">
                  {banner.buttonLabel}
                </button>
              </div>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
