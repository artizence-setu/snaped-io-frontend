"use client";
import { axiosInstance } from "@/lib/axios";
import ScriptForm from "./script-form";
import VideoOptionsForm from "./video-options-form";
import { getCookie } from "cookies-next";

const VideoGeneratorForm = () => {
  const promptDefaultValues = {
    prompt: "",
  };

  const handlePromptSubmit = (data: typeof promptDefaultValues) => {
    console.log(data);
  };

  const scriptDefaultValues = {
    script: "",
    caption: "",
    voice_link: "",
    video_length: "",
    aspect_ratio: "",
    folder: "",
  };

  const onScriptSubmit = async (data: typeof scriptDefaultValues) => {
    console.log(data);
    try {
      const res = await axiosInstance.post(
        "/api/facelessv1queries/",
        {
          script: data.script,
          ai_assistant: false,
          prompt_for_video: null,
          aspect_ratio: null,
          folder: data.folder,
          voice_link: data.voice_link,
          caption: data.caption,
          video_length: Number(data.video_length),
        },
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${getCookie("access_token")}`,
          },
        }
      );
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen flex flex-col p-4 sm:p-6 md:p-8 gap-8 lg:pr-12">
      {/* <ScriptForm
        defaultValues={scriptDefaultValue}
        onScriptSubmit={handleScriptSubmit}
      /> */}

      <VideoOptionsForm
        promptDefaultValues={promptDefaultValues}
        onPromptSubmit={handlePromptSubmit}
        scriptDefaultValues={scriptDefaultValues}
        onScriptSubmit={onScriptSubmit}
      />
    </div>
  );
};

export default VideoGeneratorForm;
