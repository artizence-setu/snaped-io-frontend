"use client";
import { useState } from "react";
import TextForm from "./text-form";
import TextInput from "./text-input";

type variant = "text" | "audio";

interface AvatarFormInputProps {
  text: string;
  selectedAvatar: string;
  aspectRatio: string;
  selectedVoice: string;
  generationProgress: number;
  isSmartMotion: boolean;
  setGenerationProgress: (progress: number) => void;
  setSelectedVoice: (text: string) => void;
  setAspectRatio: (text: string) => void;
  setText: (text: string) => void;
  setLanguage: (language: string) => void;
  setAudioUrl: (url: string) => void;
  setVideoUrl: (url: string) => void;
  setSelectedAnchor: (anchor: string) => void;
}

const AvatarForm = ({
  text,
  setText,
  setAudioUrl,
  setVideoUrl,
  setLanguage,
  setSelectedAnchor,
  selectedAvatar,
  aspectRatio,
  setAspectRatio,
  setSelectedVoice,
  selectedVoice,
  generationProgress,
  setGenerationProgress,
  isSmartMotion,
}: AvatarFormInputProps) => {
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
        isSmartMotion={isSmartMotion}
        selectedAvatar={selectedAvatar}
        setText={setText}
        setLanguage={setLanguage}
        setAudioUrl={setAudioUrl}
        setSelectedAnchor={setSelectedAnchor}
        aspectRatio={aspectRatio}
        setAspectRatio={setAspectRatio}
        setSelectedVoice={setSelectedVoice}
        selectedVoice={selectedVoice}
        generationProgress={generationProgress}
        setGenerationProgress={setGenerationProgress}
      />
    </div>
  );
};

export default AvatarForm;
