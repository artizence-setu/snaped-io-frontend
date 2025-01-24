import { rubikNormal } from "@/fonts/font";
import { cn } from "@/lib/utils";
import AvatarForm from "./components/avatar-form";

const AvatarVideo = () => {
  return (
    <div className="flex flex-col p-4 sm:p-6 md:p-8 gap-8 lg:pr-12">
      <div className="bg-background shadow rounded-lg border p-4">
        <div className="grid grid-cols-5 w-full h-full">
          <div className="col-span-2 border-r w-full border-gray-300">
            <div className={cn(rubikNormal.className, "mb-6")}>
              <p>Avatar Video</p>
              <div className="h-[3px] w-[5.5rem] bg-custom-gradient rounded-lg"></div>
            </div>
            <AvatarForm />
          </div>
          <div className="col-span-3"></div>
        </div>
      </div>
    </div>
  );
};

export default AvatarVideo;
