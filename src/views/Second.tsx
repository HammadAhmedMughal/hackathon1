import Image from "next/image";
import event1 from "/public/event1.webp";
import event2 from "/public/event2.webp";
import Link from "next/link";

const Second = () => {
  return (
    <>
      <div className="flex flex-col justify-center text-center p-10">
        <p className="pg">PROMOTIONS</p>
        <h2 className="hed">Our Promotions Events</h2>
      </div>

      <div className="eventbanner flex flex-col gap-5 md:flex-row">
        <div className="event-banar-left flex-1">
          <div className="event-banar flex bg-[#d6d6d8] justify-around items-center mb-6">
            <div className="content text-center">
              <h2 className="scroll-m-20 text-2xl font-extrabold tracking-tight ">
                GET UP TO 60%
              </h2>
              <p className="font-semibold">For the summer season</p>
            </div>
            <div className="b-img">
              <Image
                src={event1}
                alt="image "
              />
            </div>
          </div>
          <div className="event-banar  bg-[#212121] text-white">
            <div className="flex flex-col justify-center items-center p-5">
              <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight ">
                GET 30% Off
              </h2>
              <p>USE PROMO CODE</p>
              <Link href="#"><h4 className="bg-[#474747] px-12 py-3 rounded-lg">
                DINEWEEKENDSALE
              </h4></Link>
            </div>
          </div>
        </div>
        <div className="event-banar-right flex flex-col flex-1 gap-x-5 gap-y-10 md:flex-row">
          <div className="event-banar-right-2 bg-[#efe1c7]">
            <div className="event-banar-right-2 ">
              <div className="detail">
                <div className="br relative object-bottom	pt-2">
                  <Image
                    src={event2}
                    alt="image"
                  />

                  <div className="absolute top-1 left-1">
                    <p className="pg text-black">Flex Sweatshirt</p>
                    <p className="font-bold">100$</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="event-banar-right-2 bg-[#efe1c7]">
            <div className="event-banar-right-2 ">
              <div className="detail">
                <div className="br relative object-bottom	pt-2">
                  <Image
                    src={event2}
                    alt="image"
                  />

                  <div className="absolute top-1 left-1">
                    <p className="pg text-black">Flex Sweatshirt</p>
                    <p className="font-bold">100$</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center text-center pt-20">
        <p className="pg">PRODUCTS</p>
        <h2 className="hed">Check What We Have</h2>
      </div>
    </>
  );
};

export default Second;
