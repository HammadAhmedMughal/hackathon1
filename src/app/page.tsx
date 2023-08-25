
import Footer from "@/views/Footer";
import Hero from "@/views/Hero";
import Newsletter from "@/views/Newsletter";
import ProductList from "@/views/ProductList";
import Second from "@/views/Second";
import Unique from "@/views/Unique";


export default async function Home() {

  return (
    <>
    <Hero/>
    <Second/>
    <ProductList/>
    <Unique/>
    <Newsletter/>
    <Footer/>
   
    </>
  );
}
export const revalidate = 1;