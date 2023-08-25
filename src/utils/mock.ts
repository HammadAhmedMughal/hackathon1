import { Product } from "./types";
import p1 from '/public/p1.webp'
import p2 from '/public/p2.png'
import p3 from '/public/p3.png'

export const Products:Product[] =[
    {
    id:1,
    name:"product1",
    price:10,
    cat:"male",
    image:p1  
},
{
    id:2,
    name:"product2",
    price:20,
    image:p2,
    cat:"male",
},
{
    id:3,
    name:"product3",
    price:30,
    image:p3,
    cat:"female",
},
{
    id:4,
    name:"product4",
    price:40,
    image:p1,
    cat:"female",
},
{
    id:5,
    name:"product5",
    price:50,
    image:p1,
    cat:"kids",
},
{
    id:6,
    name:"product6",
    price:60,
    image:p1,
    cat:"kids",
}
];
