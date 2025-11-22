import Image from "next/image";
import Banner from "./Components/Banner";
import ProductCategory from "./Components/ProductCategory";
import Brands from "./Components/Brands";


export default function Home() {
  return (
    <div className=" min-h-screen   ">
   <Banner />

   <ProductCategory/>
   <Brands/>
    </div>
  );
}
