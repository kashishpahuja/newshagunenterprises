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

      {/* Manual 3–6–3 Grid */}
      <div
        className=" h-[400px] overflow-hidden
          grid 
          grid-cols-1
          sm:grid-cols-3
          lg:grid-cols-12
          gap-6
        "
      >

        {/* 1️⃣ First Item (col-span-3) */}
        <div className="lg:col-span-3 cursor-pointer group bg-[#d8d3d393] ">
          <div className=" p-6">
            <h3 className="text-lg font-semibold uppercase tracking-wide text-[#B67032]">
              Nilkamal
            </h3>
            <p className="text-sm text-stone-600 mt-1">Modern Dining Chairs</p>
          </div>

          <div className="w-full h-auto object-contain relative overflow-hidden  shadow">
            <img
              src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?fm=jpg&q=60&w=3000"
              alt="Nilkamal"
              className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        </div>

        {/* 2️⃣ Middle Item (col-span-6) */}
        <div className=" bg-[#d8d3d393] lg:col-span-6 cursor-pointer group">
          <div className=" p-6">
            <h3 className="text-lg font-semibold uppercase tracking-wide text-[#B67032]">
              Radha Gold
            </h3>
            <p className="text-sm text-stone-600 mt-1">Premium Wooden Tables</p>
          </div>

          <div className="w-full h-auto object-contain relative overflow-hidden  shadow">
            <img
              src="https://images.unsplash.com/photo-1565791380713-1756b9a05343?fm=jpg&q=60&w=3000"
              alt="Radha Gold"
              className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        </div>

        {/* 3️⃣ Third Item (col-span-3) */}
        <div className="  bg-[#d8d3d393] lg:col-span-3 cursor-pointer group">
          <div className=" p-6">
            <h3 className="text-lg font-semibold uppercase tracking-wide text-[#B67032]">
              Muraj
            </h3>
            <p className="text-sm text-stone-600 mt-1">Elegant Sofa Collection</p>
          </div>

          <div className="w-full h-auto object-contain relative overflow-hidden  shadow">
            <img
              src="https://images.unsplash.com/photo-1512212621149-107ffe572d2f?fm=jpg&q=60&w=3000"
              alt="Muraj"
              className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default ProductCategory;
