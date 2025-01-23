"use client";
import { useState } from "react";
import TextForm from "./text-form";

type variant = "text" | "audio";

const AvatarForm = () => {
  const [variant, setVariant] = useState<variant>("text");
  const textFormDefaultValues = {
    script: "",
    language: "",
    subtitle: "",
    aspect_ratio: "",
  };
  return (
    <div>
      <TextForm
        defaultValues={textFormDefaultValues}
        onSubmit={(data) => {
          console.log(data);
        }}
        onCancel={() => {}}
      />
    </div>
  );
};

export default AvatarForm;
