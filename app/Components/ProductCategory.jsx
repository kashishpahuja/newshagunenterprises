'use client';
import React from 'react';

const ProductCategory = () => {
  const Categorydata = [
    {
      img: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?fm=jpg&q=60&w=3000",
      type: "Chairs",
    },
    {
      img: "https://images.unsplash.com/photo-1565791380713-1756b9a05343?fm=jpg&q=60&w=3000",
      type: "Tables",
    },
    {
      img: "https://images.unsplash.com/photo-1512212621149-107ffe572d2f?fm=jpg&q=60&w=3000",
      type: "Sofas",
    },
    {
      img: "https://images.unsplash.com/photo-1505692952047-1a78307da8f2?fm=jpg&q=60&w=3000",
      type: "Beds",
    },
    {
      img: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?fm=jpg&q=60&w=3000",
      type: "Chairs",
    },
   
  ];

  return (
    <section className="relative px-4 sm:px-8 lg:px-16 my-24">
      {/* Heading */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className=" text-2xl md:text-3xl font-serif  drop-shadow-lg">
            Popular Categories
          </h2>
          <p className="text-md md:text-lg text-stone-500 font-serif mt-3">
            Explore furniture that suits your space & lifestyle.
          </p>
        </div>
      </div>

      {/* Category Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-5">
        {Categorydata.map((item, index) => (
          <div
            key={index}
            className="overflow-hidden cursor-pointer"
          >
            <div className="w-full h-96 relative overflow-hidden">
              <img
                src={item.img}
                alt={item.type}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>

            <div className="p-3 text-center">
              <h4 className="text-md font-semibold text-stone-800 group-hover:text-[#B67032] transition-colors uppercase">
                {item.type}
              </h4>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default ProductCategory;
