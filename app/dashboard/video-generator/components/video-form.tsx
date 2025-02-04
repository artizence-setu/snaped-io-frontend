"use client";
import { axiosInstance } from "@/lib/axios";
import VideoOptionsForm from "./video-options-form";
import { getCookie } from "cookies-next";

const VideoGeneratorForm = () => {
  const defaultValues = {
    script: "",
    prompt: "",
    caption: "",
    voice_link: "",
    video_length: "",
    aspect_ratio: "",
    folder: "",
  };

  const handleSubmit = async (
    data: Partial<typeof defaultValues>,
    isAIMode: boolean
  ) => {
    try {
      const res = await axiosInstance.post(
        "/api/facelessv1queries/",
        {
          script: isAIMode ? null : data.script,
          ai_assistant: isAIMode,
          prompt_for_video: isAIMode ? data.prompt : null,
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
      console.log("Response:", res.data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="flex flex-col p-4 sm:p-6 md:p-8 gap-8 lg:pr-12">
      <VideoOptionsForm defaultValues={defaultValues} onSubmit={handleSubmit} />
    </div>
  );
};

export default VideoGeneratorForm;
