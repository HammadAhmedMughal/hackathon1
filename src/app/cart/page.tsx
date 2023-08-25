'use client'
import Providers from "@/components/Provider"
import { RootState } from "@/store/store"
import { useSelector } from "react-redux"
import { Button } from "@/components/ui/button"
import CheckOut from "@/app/CheckOut"


const CartDetail = () => {
  const cartValue=useSelector((state:RootState)=>state.cart.totalQuantity)
  const productName=useSelector((state:RootState)=>state.cart.items)
  const productPrice=useSelector((state:RootState)=>state.cart.totalAmount)
  return (
    <div >
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl py-10">
      Shopping Cart
    </h1>
    <div >
    <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
    Product Name : {productName}
    </h3>
    <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
    Quantity : {cartValue}
    </h3>
    <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
    Product Price : {productPrice}
    </h3>
     
      </div>
      <div className="py-20">
      <CheckOut name={productName} price={productPrice} quantity={cartValue}/>
      </div>
    </div>
  )
}

export default CartDetail