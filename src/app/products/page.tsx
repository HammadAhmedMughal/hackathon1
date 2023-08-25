export const dynamic = true;
export const revalidate = 0;
import ProductCart from "@/app/ProductCart";
import { client } from "@/lib/sanityClient";
import { Item } from "@radix-ui/react-select";
import { log } from "console";
import { Image as IImage } from "sanity";
import ProductCard from "@/components/ProductCard";
import { StaticImageData } from "next/image";

export const getProductData = async () => {
  const res = await client.fetch(`*[_type == "product"]{
    _id,
      title,
      description,
      price,
      image,
      category -> {
        name
      }
  }`,{next:{revalidate:1}});
  return res;
  
};

export interface Iproduct {
  _id: string;
  title: string;
  description: string;
  price: number;
  image: IImage;
  category: {
    name: string;
  };
}

export default async function Data() {
  const data: Iproduct[] = await getProductData();
  

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-x-4 gap-y-10">
    {data.map((product) => (
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
  )

}

// const AllProducts = () => {
//   return (
//     <div className="flex flex-wrap justify-start mt-16 mb-16">
//       {data.map((product) => (
//         <ProductCard
//           key={product.id}
//           title={product.name}
//           price={product.price}
//           image={product.image as StaticImageData}
//           category={product.cat}
//           id={product.id}
//         />
//       ))}
//     </div>
//   );
// };
