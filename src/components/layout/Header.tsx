"use client";
import Image from "next/image";
import logo from "/public/logo.webp";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/store/store";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const handlenav = () => {
    setMenuOpen(!menuOpen);
  };

  const cartValue = useSelector((state: RootState) => state.cart.totalQuantity);

  return (
    <>
      <div className="md:flex md:justify-between md:items-center p-5">
        <div className="flex justify-between items-center">
          <div>
            <Link href={"/"}>
              <Image
                src={logo}
                alt="logo"
              />
            </Link>
          </div>
          <div
            onClick={handlenav}
            className="md:hidden cursor-pointer pl-24">
            <AiOutlineMenu />
          </div>
        </div>

        <div>
          <ul className="md:flex md:items-center hidden justify-start">
            <li className="mx-4 my-6 md:my-0">
              <Link href={"/category/female"}>Female</Link>
            </li>
            <li className="mx-4 my-6 md:my-0">
              <Link href={"/category/male"}>Male</Link>
            </li>
            <li className="mx-4 my-6 md:my-0">
              <Link href={"/category/Kids"}>Kids</Link>
            </li>
            <li className="mx-4 my-6 md:my-0">
              <Link href={"/products"}>All Product</Link>
            </li>
          </ul>
        </div>
        <div>
          <div className="w-10 h-10 rounded-full bg-gray-100 hidden md:flex justify-center items-center relative ">
            <p className="text-lg">
              <span className="absolute flex right-1 top-0 rounded-full bg-red-500 h-4 w-4 text-white text-xs justify-center">
                {cartValue}
              </span>
              <Link href="/cart">
                <AiOutlineShoppingCart />
              </Link>
            </p>
          </div>
        </div>
      </div>

      <div
        className={
          menuOpen
            ? "fixed left-0 top-0 w-[65%] sm:hidden h-screen p-10 bg-white  ease-in duration-500"
            : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
        }>
        <div className="flex w-full item-center justify-end">
          <div
            onClick={handlenav}
            className="curser-pointer">
            <AiOutlineClose />
          </div>
        </div>

        <ul className="">
          <li
            className="my-5"
            onClick={() => setMenuOpen(false)}>
            <Link href={"/category/female"}>Female</Link>
          </li>
          <li
            className="my-5"
            onClick={() => setMenuOpen(false)}>
            <Link href={"/category/male"}>Male</Link>
          </li>
          <li
            className="my-5"
            onClick={() => setMenuOpen(false)}>
            <Link href={"/category/Kids"}>Kids</Link>
          </li>
          <li
            className="my-5"
            onClick={() => setMenuOpen(false)}>
            <Link href={"/products"}>All Product</Link>
          </li>

          <div className="w-10 h-10 rounded-full bg-gray-100 flex justify-center items-center relative">
            <p
              className="text-lg"
              onClick={() => setMenuOpen(false)}>
              <span className="absolute flex right-1 top-0 rounded-full bg-red-500 h-4 w-4 text-white text-xs justify-center">
                {cartValue}
              </span>
              <Link href="/cart">
                <AiOutlineShoppingCart />
              </Link>
            </p>
          </div>
        </ul>
      </div>
    </>
  );
}
