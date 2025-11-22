"use client";
import { useState } from "react";
import { FiSearch, FiUser, FiHeart, FiShoppingCart, FiMenu, FiX } from "react-icons/fi";
import Link from "next/link";

export default function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full border-b bg-white sticky top-0 z-50">
     
      <div className="text-center bg-[#796F51] text-white py-2 font-semibold text-sm md:text-xl">
        Mix, match, and save up to ₹4000 on Summer-ready styles!
      </div>

      <nav className="flex items-center justify-between md:justify-center px-6 py-4">
    
        <button 
          className="md:hidden text-2xl"
          onClick={() => setOpen(!open)}
        >
          {open ? <FiX /> : <FiMenu />}
        </button>

       
        <Link href="/" className="text-2xl font-semibold tracking-widest">
          FUNCHER SHOP
        </Link>
        <div className="md:hidden">

        </div>

      </nav>

      <div className="hidden md:flex justify-center gap-10 py-3 text-gray-700 border-t">
        <Link href="/">Home</Link>
        <Link href="/chairs">Chairs</Link>
        <Link href="/tables">Tables</Link>
        <Link href="/coolers">Coolers</Link>
        <Link href="/home-decor">Home Decor</Link>
        <Link href="/lighting">Lighting</Link>
        <Link href="/brands">Brands</Link>
        <Link href="/shop">Shop</Link>
        <Link href="/promotions">Promotions</Link>
      </div>

      
      {open && (
        <div className="md:hidden bg-white px-6 py-4 border-t">
          <div className="flex flex-col gap-4 text-gray-700">
            <Link href="/">Home</Link>
            <Link href="/chairs">Chairs</Link>
            <Link href="/tables">Tables</Link>
            <Link href="/coolers">Coolers</Link>
            <Link href="/home-decor">Home Decor</Link>
            <Link href="/lighting">Lighting</Link>
            <Link href="/brands">Brands</Link>
            <Link href="/shop">Shop</Link>
            <Link href="/promotions">Promotions</Link>
          </div>
        </div>
      )}
    </header>
  );
}
