'use client';
import React from 'react';

const ProductCategory = () => {
  return (
    <section className="relative px-4 sm:px-8 lg:px-16 my-24">

      {/* Heading */}
      <div className="mb-10">
        <h2 className="text-2xl md:text-3xl font-serif drop-shadow-lg">
          Popular Categories
        </h2>
        <p className="text-md md:text-lg text-stone-500 font-serif mt-3">
          Explore furniture that suits your space & lifestyle.
        </p>
      </div>

      {/* Responsive Grid */}
      <div
        className="
          grid 
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-12
          gap-6
        "
      >

        {/* 1️⃣ Left — Nilkamal Plastic Chair */}
        <div className="relative lg:col-span-3 cursor-pointer group overflow-hidden rounded-xl shadow-lg">

          {/* Text Overlay */}
          <div className="absolute top-0 left-0 p-6 z-20 backdrop-blur-md bg-white/40 rounded-br-xl">
            <h3 className="text-lg font-semibold tracking-wide text-[#B67032]">
              Nilkamal
            </h3>
            <p className="text-sm text-stone-700">Modern Plastic Chairs</p>
          </div>

          {/* Image */}
          <img
            src="https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=2000&q=80"
            alt="Nilkamal"
            className="w-full h-64 sm:h-80 lg:h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>

        {/* 2️⃣ Center — Premium Plastic Chair Set */}
        <div className="relative lg:col-span-5 cursor-pointer group overflow-hidden rounded-xl shadow-lg">

          {/* Text Overlay */}
          <div className="absolute top-0 left-0 p-6 z-20 backdrop-blur-md bg-black/40 rounded-br-xl w-fit">
            <h3 className="text-lg font-semibold tracking-wide text-white">
              Radha Gold
            </h3>
            <p className="text-sm text-stone-200">Premium Chair Collection</p>
          </div>

          {/* Image */}
<img
  src="https://images.unsplash.com/photo-1565791380713-1756b9a05343?fm=jpg&q=60&w=3000"
  alt="Radha Gold"
  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
/>

        </div>

        {/* 3️⃣ Right — Elegant Chairs */}
        <div className="relative lg:col-span-4 cursor-pointer group overflow-hidden rounded-xl shadow-lg">

          {/* Text Overlay */}
          <div className="absolute top-0 left-0 p-6 z-20 backdrop-blur-md bg-white/40 rounded-br-xl">
            <h3 className="text-lg font-semibold tracking-wide text-[#B67032]">
              Muraj
            </h3>
            <p className="text-sm text-stone-700">Elegant Chair Collection</p>
          </div>

          {/* Image */}
          <img
            src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=2000&q=80"
            alt="Muraj Chairs"
            className="w-full h-64 sm:h-80 lg:h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>

      </div>
    </section>
  );
};

export default ProductCategory;
