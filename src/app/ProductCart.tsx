"use client";

import Image from "next/image";
import { client } from "@/lib/sanityClient";
import { Image as IImage } from "sanity";
import { urlForImage } from "../../sanity/lib/image";
import { FC } from "react";

const ProductCart: FC<{ item: any }> = ({ item }) => {
  const handleAddToCart = async () => {
    const res = await fetch("/api/cart", {
      method: "POST",
      body: JSON.stringify({
        product_id: item._id,
      }),
    });

    const result = await res.json();
   
  };

  return (
    <>
      <Image
        src={urlForImage(item.image).url()}
        alt="product"
        width={300}
        height={300}
      />
      <h2>{item.title}</h2>
      <h3>{item.price}</h3>
      <button
        onClick={() => handleAddToCart()}
        className="border py-2 px-6 rounded bg-blue-600 text-white">
        Add to Cart
      </button>
    </>
  );
};

export default ProductCart;
