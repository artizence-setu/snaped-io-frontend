import { Button } from "@/components/button";
import Image from "next/image";
import { TbPlus } from "react-icons/tb";

const Introduction = () => {
  return (
    <div className="bg-background shadow w-full rounded-lg flex justify-between h-40">
      <div className="flex-1 py-4 lg:py-8 pl-4">
        <h3 className="text-lg font-extralight text-foreground/80">
          Introduction to our new Blog to Video
        </h3>
        <p className="text-foreground/70 mt-2">
          Elevate your content with advanced faceless videos featuring immersive
          animations.
        </p>
        <div className="mt-3 flex items-center gap-3">
          <Button>
            <TbPlus className="mr-2 size-5" />
            Try Now
          </Button>
          <button className="shadow text-foreground/60 font-thin px-4 py-1 rounded-lg text-sm flex items-center hover:opacity-80 transition-all">
            Dismiss
          </button>
        </div>
      </div>
      <div className="h-full overflow-hidden hidden lg:block">
        <Image
          src="/frame.png"
          alt="Frame"
          height={400}
          width={400}
          className="w-72 h-full object-cover"
        />
      </div>
    </div>
  );
};

export default Introduction;
