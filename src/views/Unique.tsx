import Image from "next/image";
import feature from "/public/feature.webp";
import { Button } from "@/components/ui/button";

const Unique = () => {
  return (
    <>
      <div className="bg-[#fbfcff] md:px-20 py-10">
        <div className="flex justify-center">
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
            Unique and Authentic Vintage Designer Jewellery
          </h1>
        </div>

        <div className="md:flex pt-20 items-center bg-[#fbfcff]">
          <div className="left-section md:flex-1 ">
            <div className="left-first flex pb-10">
              <div className="pl-5">
                <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
                  Using Good Quality Materials
                </h4>
                <p className="leading-7 [&:not(:first-child)]:mt-2">
                  Lorem ipsum dolor sit amt, consectetur adipiscing elit.
                </p>
              </div>
              <div className="pl-5">
                <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
                  Using Good Quality Materials
                </h4>
                <p className="leading-7 [&:not(:first-child)]:mt-2">
                  Lorem ipsum dolor sit amt, consectetur adipiscing elit.
                </p>
              </div>
            </div>
            <div className="left-second flex">
              <div className="pl-5">
                <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
                  Using Good Quality Materials
                </h4>
                <p className="leading-7 [&:not(:first-child)]:mt-2">
                  Lorem ipsum dolor sit amt, consectetur adipiscing elit.
                </p>
              </div>
              <div className="pl-5">
                <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
                  Using Good Quality Materials
                </h4>
                <p className="leading-7 [&:not(:first-child)]:mt-2">
                  Lorem ipsum dolor sit amt, consectetur adipiscing elit.
                </p>
              </div>
            </div>
          </div>
          <div className="flex-1">
            <div className="left-section flex justify-center items-center">
              <div className="flex-1">
                <Image
                  src={feature}
                  alt="feature image"
                />
              </div>
              <div className="flex-1 justify-start text-start pl-5">
                <p className="leading-7 [&:not(:first-child)]:mt-6 ">
                  This piece is ethically crafted in our small family-owned
                  workshop in Peru with unmatched attention to detail and care.
                  The Natural color is the actual natural color of the fiber,
                  undyed and 100% traceable.
                </p>
                <Button>See All Products</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Unique;
