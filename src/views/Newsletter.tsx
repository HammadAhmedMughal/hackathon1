import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Newsletter = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center md:p-20 mb-5">
      <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
        Subscribe Our Newsletter
      </h2>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        Get the latest information and promo offers directly
      </p>
      <div className="flex w-full max-w-sm items-center space-x-2 pt-5">
        <Input
          type="email"
          placeholder="Input Emaill Address"
        />
        <Button type="submit">Subscribe</Button>
      </div>
    </div>
  );
};
export default Newsletter;
