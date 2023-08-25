import { NextRequest, NextResponse } from "next/server";
import { Stripe } from "stripe";
import { stripVTControlCharacters } from "util";


const key = process.env.STRIPE_SECRET_KEY || "";

const stripe =new Stripe(key,{
    apiVersion:"2023-08-16"
})

export async function POST(request:NextRequest){
const body=await request.json();
console.log(body);
try {
  
    const session = await stripe.checkout.sessions.create({
      submit_type:'pay',
      mode: 'payment',
      payment_method_types:['card'],
      billing_address_collection:'auto',
      shipping_options:[
        {shipping_rate:"shr_1NiIA3FWb9Fh8V4gqjQfZpvd" },
        {shipping_rate:"shr_1NiIAsFWb9Fh8V4gyRE7LC1j" },
        
        
      ],
      line_items:body.map((item:any)=>{
return{
  price_data:{
    currency:"pkr",
    product_data:{name:item.name,},
    unit_amount:item.price * 100,
  },
    
    quantity:item.quantity,
}
      }),
      success_url: `${request.headers.get("origin")}/?success=true`,
      cancel_url: `${request.headers.get("origin")}/?canceled=true`,
    });
    return NextResponse.json({session})

    
    
  } catch (err:any) {
    console.log(err);
    return NextResponse.json(err.message)
  }
}
