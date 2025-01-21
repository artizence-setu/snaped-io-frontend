"use client";
import ScriptForm from "./script-form";
import VideoOptionsForm from "./video-options-form";

const VideoGeneratorForm = () => {
  const scriptDefaultValue = {
    script: "",
    prompt: "",
  };

  /* 
    Script Submission Function, here we can implement api for script submission and get the response from the api
  */
  const handleScriptSubmit = (data: typeof scriptDefaultValue) => {
    console.log(data);
  };

  const videoOptionsDefaultValues = {
    language: "",
    caption: "",
    voice: "",
    videoLength: "",
    aspectRatio: "",
    captionPosition: "",
    videoQuality: "",
    captionAnimation: "",
    backgroundMusic: "",
    soundEffect: "",
    animation: "",
    imageTransition: "",
    folder: "",
  };

  /*
    Video Options Submission Function, here we can implement api for video options submission and get the response from the api
  */
  const onVideoOptionSubmit = (data: typeof videoOptionsDefaultValues) => {
    console.log(data);
  };

  return (
    <div className="min-h-screen flex flex-col p-4 sm:p-6 md:p-8 gap-8 lg:pr-12">
      <ScriptForm
        defaultValues={scriptDefaultValue}
        onScriptSubmit={handleScriptSubmit}
      />

      <VideoOptionsForm
        defaultValues={videoOptionsDefaultValues}
        onVideoOptionSubmit={onVideoOptionSubmit}
      />
    </div>
  );
};

export default VideoGeneratorForm;
