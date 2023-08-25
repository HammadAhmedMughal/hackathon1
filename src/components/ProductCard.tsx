import Image, { StaticImageData } from "next/image";
import { Image as IImage } from "sanity";
import Link from "next/link";
import { urlForImage } from "../../sanity/lib/image";
import AddToCart from "./AddToCart";

function ProductCard(props: {
  title: string;
  price: number;
  image: IImage;
  category: {
    name: string;
  }
  id: string;
}) {
  return (<>
    
      <div className="bl  m-5 ">
        <Link href={`/products/${props.id}`}>
        <div className="w-[400px] h-[400px]  bg-gray-100">
        <Image
        width={400}
        height={400}
        className="max-h-96 object-cover object-top"
          src={urlForImage(props.image).url() }
          alt="image"
        />
        </div>
        <div className="pt-5">
        <h3 className="font-bold text-lg mt-3">{props.title}</h3>
        <p className="font-bold text-lg">${props.price}.00</p>
        <p className="font-bold text-lg">
          Category <span className="font-normal text-sm">{props.category.name}</span>
        </p>
        </div>
        </Link>
        <AddToCart name={props.title} price={props.price} image={props.image}/>
      </div>
    
    
    </>
  );
}

export default ProductCard;
