import Image, { StaticImageData } from "next/image";
import { Image as IImage } from "sanity";
import Link from "next/link";
import { urlForImage } from "../../sanity/lib/image";
import AddToCart from "./AddToCart";

function ProductDetail(props: {
  title: string;
  price: number;
  image: IImage;
  category: {
    name: string;
  }
  detail: string;
}) {
  return (
   
      <div className="px-3 flex">
        <div className="flex-1">
        <Image
        width={600}
        height={600}
        className="object-cover object-top"
          src={urlForImage(props.image).url() }
          alt="image"
        />
        </div>
        <div className="flex-1 gap-y-5">
        <h3 className="font-bold text-lg mt-3">{props.title}</h3>
        <p className="font-bold text-lg">${props.price}.00</p>
        <p className="font-bold text-lg">
          Category <span className="font-normal text-sm">{props.category.name}</span>
        </p>
        <p className="leading-6"><span className="font-bold text-lg">Product Detail: </span>{props.detail}</p>
        <AddToCart name={props.title} price={props.price} image={props.image} />
        </div>
        
      </div>

  );
}

export default ProductDetail;
