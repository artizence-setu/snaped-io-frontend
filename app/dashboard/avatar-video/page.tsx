"use client";

import { rubikNormal } from "@/fonts/font";
import { cn } from "@/lib/utils";
import AvatarForm from "./components/avatar-form";
import AvatarSelection from "./components/avatar-selection";
import { useState } from "react";
import Preview from "./components/preview";
import { PersonStanding, StarIcon } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

const AvatarVideo = () => {
  const [text, setText] = useState("");
  const [language, setLanguage] = useState("");
  const [audioUrl, setAudioUrl] = useState("");
  const [videoUrl, setVideoUrl] = useState("");
  const [selectedAnchor, setSelectedAnchor] = useState("");
  const [selectedAvatar, setSelectedAvatar] = useState("");
  const [aspectRatio, setAspectRatio] = useState("");
  const [selectedVoice, setSelectedVoice] = useState("");
  const [selectedMenu, setSelectedMenu] = useState<number>(1);
  const [isSmartMotion, setIsSmartMotion] = useState(false);

  const [generationProgress, setGenerationProgress] = useState(0);

  const changeMenu = (id: number) => {
    setSelectedMenu(id);
  };

  return (
    <div className="flex flex-col p-4 sm:p-6 md:p-8 gap-8 lg:pr-12">
      <div className="bg-background shadow rounded-lg border p-4">
        <div className="grid grid-cols-5 w-full h-full">
          <div className="col-span-2 border-r w-full border-gray-300 pr-4">
            <div className={cn(rubikNormal.className, "mb-6")}>
              <p>Avatar Video</p>
              <div className="h-[3px] w-[5.5rem] bg-custom-gradient rounded-lg"></div>
            </div>
            <AvatarForm
              generationProgress={generationProgress}
              setGenerationProgress={setGenerationProgress}
              selectedVoice={selectedVoice}
              setSelectedVoice={setSelectedVoice}
              aspectRatio={aspectRatio}
              setAspectRatio={setAspectRatio}
              selectedAvatar={selectedAvatar}
              text={text}
              setText={setText}
              setLanguage={setLanguage}
              setVideoUrl={setVideoUrl}
              setAudioUrl={setAudioUrl}
              setSelectedAnchor={setSelectedAnchor}
              isSmartMotion={isSmartMotion}
            />
          </div>
          <div className="col-span-3 flex flex-col p-4 space-y-8">
            <Preview
              generationProgress={generationProgress}
              audioUrl={audioUrl}
              videoUrl={videoUrl}
            />

            <div className="flex flex-col space-y-3">
              <div className="flex space-x-2">
                <button
                  onClick={() => changeMenu(0)}
                  className={`flex items-center space-x-1 ${selectedMenu===0?"border":"border-0"} rounded-md px-2 py-1`}
                >
                  <StarIcon className="size-5" />
                  <span>Favorites</span>
                </button>

                <button
                  onClick={() => changeMenu(1)}
                  className={`flex items-center space-x-1 ${selectedMenu===1?"border":"border-0"} rounded-md px-2 py-1`}
                >
                  <PersonStanding className="size-5" />
                  <span>Avatars</span>
                </button>

                <div className="flex items-center space-x-1 text-white">
                  <Switch
                    checked={isSmartMotion}
                    onCheckedChange={(e) => setIsSmartMotion(!isSmartMotion)}
                    id="smart-motion"
                    className="bg-white"
                  />
                  <Label htmlFor="smart-motion">Smart Motion</Label>
                </div>

                <div className="flex items-center space-x-1 text-white">
                  <Switch id="allow-reverse" className="bg-white" />
                  <Label htmlFor="allow-reverse">Allow Reverse</Label>
                </div>
              </div>
              <AvatarSelection
                favAvatars={selectedMenu === 0 ? [] : null}
                selectedAvatar={selectedAvatar}
                setSelectedAvatar={setSelectedAvatar}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AvatarVideo;
