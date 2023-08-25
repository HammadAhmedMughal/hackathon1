import { urlForImage } from "sanity/lib/image";
import { getProductData } from "@/app/products/page";
import  {Image as IImages} from 'sanity';
import Image from "next/image";
import ProductDetail from "@/components/ProductDetail";
import { log } from "console";
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


export async function GetData(slug:string) {
  const data2: Iproduct[] = await getProductData();


  return (
 data2.filter((pro)=>pro.category.name == slug)
 
  )

}


export default async function Page({ params }: { params: { slug: string } }) {
  const result =await GetData(params.slug);
  console.log("this is a cat value"+ params.slug);

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
