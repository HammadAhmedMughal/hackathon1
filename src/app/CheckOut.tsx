"use client";

import getStripePromise from "@/lib/stripe";



const CheckOut = (props: { name: any, price: number, quantity:number}) => {
  const Products =[{
    name:props.name,
    price:props.price,
    quantity: props.quantity,
  }];
  
  const handleCheckOut = async () => {
   
const stripe = await getStripePromise();


const response = await fetch("api/stripe-session/", {
    method:"POST",
    headers:{"Content-Type":"application/json"},
    cache:"no-cache",
    body: JSON.stringify(Products),
})
const data= await response.json();
if (data.session){
  stripe?.redirectToCheckout({sessionId:data.session.id})
}

  };
  return (
    <div>
      <button
        className="py-2 px-5 bg-green-500 rounded-lg text-black"
        onClick={handleCheckOut}>
        CheckOut
      </button>
    </div>
  );
};

export default CheckOut;
