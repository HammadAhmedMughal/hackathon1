import { client } from "@/lib/sanityClient";
import { Image as IImage } from "sanity";
import ProductCard from "@/components/ProductCard";

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
  }`);
  return res; 
};

// export interface Iproduct {
//   _id: string;
//   title: string;
//   description: string;
//   price: number;
//   image: IImage;
//   category: {
//     name: string;
//   };
// }

export default async function Data() {

  const data:any = await getProductData();


  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-x-4 gap-y-10">
    {data.map((product:any) => (
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
