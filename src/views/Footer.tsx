import Image from "next/image";
import logo from "/public/Logo.webp";
import { BsTwitter } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <div className="grid md:grid-cols-4 gap-4 py-20 border-t">
        <div className="col-1">
         <Link href="/">
          <Image
            src={logo}
            alt="footer logo"
          /></Link>
          <p className="leading-8 [&:not(:first-child)]:mt-2 pr-5">
            Small, artisan label that offers a thoughtfully curated collection
            of high quality everyday essentials made.
          </p>
          <Link href="#">
          <ul className="flex gap-x-5 py-5">
            
            <li>
              <BsTwitter />
            </li>
            <li>
              <BsFacebook />
            </li>
            <li>
              <BsLinkedin />
            </li>
            
          </ul>
          </Link>
        </div>
        <div className="col-2">
          <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
            Company
          </h4>
          <Link href="#">
          <ul className="leading-10">
            <li >About</li>
            <li>Terms of Use</li>
            <li>Privacy Policy</li>
            <li>How it Works</li>
            <li>Contact Us</li>
          </ul>
          </Link>
        </div>
        <div className="col-3">
        <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
        Support
          </h4>
          <Link href="#">
          <ul className="leading-10">
            <li>Support Carrer</li>
            <li>24h Service</li>
            <li>Quick Chat</li>
          </ul>
          </Link>
        </div>
        <div className="col-4">
        <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
        Contact
          </h4>
          <Link href="#">
          <ul className="leading-10"    >
            <li>Whatsapp</li>
            <li>Support 24h</li>
          </ul>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Footer;
