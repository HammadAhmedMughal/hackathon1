import { urlForImage } from "sanity/lib/image";
import {getProductData} from "../page";
import  {Image as IImages} from 'sanity';
import Image from "next/image";
import ProductDetail from "@/components/ProductDetail";


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

const AllProducts  = async (id:number | string) => {
    const result:Iproduct[] = await getProductData();
    return (
    result.filter((pro)=>pro._id == id)
     )
}


type categoryParams = {
    params: {
      id: number;
    };
  };
export default async function Page(params:categoryParams) {
  const result =await AllProducts(params.params.id);
  return (
    <div className="flex flex-wrap justify-start mt-16 mb-16">
      {result.map((product) => (

      <ProductDetail
      key={product._id}
      title={product.title}
      price={product.price}
      image={product.image}
      category={product.category}
      detail={product.description}
      
      />
      ))}
    </div>
  );
}
