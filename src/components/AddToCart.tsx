"use client";
import { useDispatch } from "react-redux";
import { Button } from "./ui/button";
import { cartActions } from "@/store/slice/cartSlice";
import toast from "react-hot-toast";
import { Image as IImage } from "sanity";

const AddToCart = (props: { name: string, price: number,image:IImage}) => {
  const res = props.name;
  const dispatch = useDispatch();
  const addItem = () => {
    dispatch(cartActions.addToCart({ quantity: 1 }));
    dispatch(cartActions.productDetail({ product: res }));
    dispatch(cartActions.totalAmount({ price: props.price }));
    toast.success("Product " + res + " Added");
  };
  return <Button onClick={addItem}>Add To Cart</Button>;
};

export default AddToCart;
