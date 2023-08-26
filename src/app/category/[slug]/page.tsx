import { urlForImage } from "sanity/lib/image";

import  {Image as IImages} from 'sanity';
import Image from "next/image";
import ProductDetail from "@/components/ProductDetail";
import { getProductData } from "@/app/products/page";
import ProductCard from "@/components/ProductCard";


 interface Iproduct {
  _id: string;
  title: string;
  description: string;
  price: number;
  image: IImages;
  category: {
    name: string;
  };
}

const AllProducts  = async (slug:string) => {
    const result:Iproduct[] = await getProductData();
    return (
    result.filter((pro)=>pro.category.name == slug)
     )
}


type categoryParams = {
    params: {
      slug: string;
    };
  };
export default async function Page(params:categoryParams) {
  const result =await AllProducts(params.params.slug);
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-x-4 gap-y-10">
    {result.map((product) => (
      <ProductCard
        key={product._id}
        title={product.title}
        price={product.price}
        image={product.image}
        category={product.category}
        id={product._id}
      />
    ))}
  </div>
  );
}
