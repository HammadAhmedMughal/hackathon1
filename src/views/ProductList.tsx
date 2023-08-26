import Image from "next/image";
import ProductCard from "@/components/ProductCard";
import  {Image as IImages} from 'sanity';

import { getProductData } from "@/app/products/page";
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

const ProductList  = async () => {
  const result:Iproduct[] = await getProductData();
  const productChanks = result.slice(0, 3);

  return (
    <div className="flex flex-col md:flex-row justify-evenly mt-16 mb-16">
      {productChanks.map((product) => (
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
};

export default ProductList;
