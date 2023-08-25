import { StaticImageData } from "next/image"

export type Product ={
    id:number,
    name:string,
    price:number,
    cat:string,
    image:string | StaticImageData,
};