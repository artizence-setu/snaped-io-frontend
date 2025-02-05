"use client";
import { useState } from "react";
import TextForm from "./text-form";
import TextInput from "./text-input";

type variant = "text" | "audio";

interface AvatarFormInputProps {
  text: string
  selectedAvatar: string
  setText: (text: string) => void
  setLanguage: (language: string) => void
  setAudioUrl: (url: string) => void
  setVideoUrl: (url: string) => void
  setSelectedAnchor: (anchor: string) => void
}

const AvatarForm = ({text , setText , setAudioUrl, setVideoUrl, setLanguage , setSelectedAnchor , selectedAvatar} : AvatarFormInputProps) => {
  const [variant, setVariant] = useState<variant>("text");
  const textFormDefaultValues = {
    script: "",
    language: "",
    subtitle: "",
    aspect_ratio: "",
  };
  return (
    <div>
      <TextInput
            text={text}
            setVideoUrl={setVideoUrl}
            selectedAvatar={selectedAvatar}
            setText={setText}
            setLanguage={setLanguage}
            setAudioUrl={setAudioUrl}
            setSelectedAnchor={setSelectedAnchor}
      />
    </div>
  );
};

export default AvatarForm;
