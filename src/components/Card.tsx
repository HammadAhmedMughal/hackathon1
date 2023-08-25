import { Button } from "@/components/ui/button";
import { AiTwotoneHeart } from "react-icons/ai";

export function TypographyH1() {
  return (
    <div className="m-6">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        Hammad Ahmed
      </h1>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        The king, seeing how much happier his subjects were, realized the error
        of his ways and repealed the joke tax.
      </p>
      <Button>
        <AiTwotoneHeart className="m-2" /> Login with Email
      </Button>
    </div>
  );
}
