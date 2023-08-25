import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BsCart2 } from "react-icons/bs";
import heroImage from "/public/heroImage.webp";
import Image from "next/image";
import logo_1 from "/public/logo-1.webp"
import logo_2 from "/public/logo-2.webp"
import logo_3 from "/public/logo-3.webp"
import logo_4 from "/public/logo-4.webp"


const Hero = () => {
  return (
    <section className="flex flex-col md:flex-row gap-y-10 items-center">
      {/* Left Div */}

      <div className="flex-1 mx-8">
        <Badge className="py-2 px-4 bg-blue-200  text-bold text-blue-900 rounded-none">
          Sale 70%
        </Badge>
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mt-6">
          An Industrial Take on Streetwear
        </h1>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          Anyone can beat you but no one can beat your outfit as long as you
          wear Dine outfits.
        </p>
        <Button className="rounded-none h-16 px-6 mt-3">
          <BsCart2 /> <p className="px-2">Start Shopping</p>
        </Button>
<div className ="grid grid-cols-4 gap-4 pt-10">
<div><Image src={logo_1} alt={"logo-1"}/></div>
<div><Image src={logo_2} alt={"logo-2"}/></div>
<div><Image src={logo_3} alt={"logo-3"}/></div>
<div><Image src={logo_4} alt={"logo-4"}/></div>


</div>




      </div>

      {/* Right Div */}
      <div className="hidden lg:block">
<div className="heroColor relative"></div>

      <div className="flex-1 absolute right-5 top-20 md:none">
        <Image
          src={heroImage}
          alt="heroImage"
        />
      </div>
      </div>
    </section>
  );
};

export default Hero;
