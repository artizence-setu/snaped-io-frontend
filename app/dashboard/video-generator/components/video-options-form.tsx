import { Button } from "@/components/button";
import { interNormal, rubikNormal } from "@/fonts/font";
import { cn } from "@/lib/utils";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { RiGeminiLine } from "react-icons/ri";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import SelectOptions from "@/components/select-options";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button as ShadcnBtn } from "@/components/ui/button";
import { useState } from "react";

const scriptFormSchema = z.object({
  script: z.string().min(1, "Script is required"),
  caption: z.string().min(1, "Required"),
  voice_link: z.string().min(1, "Required"),
  video_length: z.string().min(1, "Required"),
  aspect_ratio: z.string().min(1, "Required"),
  folder: z.string().optional().default("home"),
});

type ScriptFormType = z.infer<typeof scriptFormSchema>;

const promptFormSchema = z.object({
  prompt: z.string().min(10, "Minimum 10 characters are required"),
});

type PromptFormType = z.infer<typeof promptFormSchema>;

interface VideoOptionsProps {
  promptDefaultValues: PromptFormType;
  onPromptSubmit: (data: PromptFormType) => void;
  scriptDefaultValues: ScriptFormType;
  onScriptSubmit: (data: ScriptFormType) => void;
}

const VideoOptionsForm: React.FC<VideoOptionsProps> = ({
  onPromptSubmit,
  scriptDefaultValues,
  promptDefaultValues,
  onScriptSubmit,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);

  const languageOptions = [
    { label: "English", value: "English" },
    { label: "Spanish", value: "Spanish" },
    { label: "Hindi", value: "Hindi" },
  ];

  const captionOptions = [
    { label: "Hello", value: "hello" },
    { label: "Hii", value: "hii" },
    { label: "Bye", value: "bye" },
  ];

  const voiceOptions = [
    { label: "Voice 1", value: "voice1" },
    { label: "Voice 2", value: "voice2" },
  ];

  const video_lengthOptions = [
    { label: "15 Seconds", value: "5" },
    { label: "30 Seconds", value: "30" },
    { label: "45 Seconds", value: "45" },
    { label: "1 Minute", value: "60" },
    { label: "2 Minutes", value: "120" },
    { label: "5 Minutes", value: "300" },
  ];

  const aspect_ratioOptions = [
    { label: "Vertical (9:16)", value: "9:16" },
    { label: "Horizontal (16:9)", value: "16:9" },
    { label: "Square (1:1)", value: "1:1" },
  ];

  const captionPositionOptions = [
    { label: "Top", value: "top" },
    { label: "Bottom", value: "bottom" },
  ];

  const videoQualityOptions = [
    { label: "720p", value: "720" },
    { label: "1080p", value: "1080" },
  ];

  const captionAnimationOptions = [
    { label: "Faded", value: "faded" },
    { label: "Slide", value: "slide" },
  ];

  const backgroundMusicOptions = [
    { label: "Sadness Sunrise", value: "sadness_sunrise" },
    { label: "Happy Tune", value: "happy_tune" },
  ];

  const soundEffectOptions = [
    { label: "Drum Role", value: "drum_role" },
    { label: "Clap", value: "clap" },
  ];

  const animationOptions = [
    { label: "Animation 1", value: "animation1" },
    { label: "Animation 2", value: "animation2" },
  ];

  const imageTransitionOptions = [
    { label: "Fade", value: "fade" },
    { label: "Slide", value: "slide" },
  ];

  const folderOptions = [
    { label: "Home", value: "home" },
    { label: "Work", value: "work" },
  ];

  const scriptForm = useForm<ScriptFormType>({
    defaultValues: scriptDefaultValues || {},
    resolver: zodResolver(scriptFormSchema),
  });

  const promptForm = useForm<PromptFormType>({
    defaultValues: promptDefaultValues || {},
    resolver: zodResolver(promptFormSchema),
  });

  const handleScriptSubmit = (data: ScriptFormType) => {
    console.log(data);
    setIsGenerating(true);
    onScriptSubmit(data);
    setIsGenerating(false);
  };

  const handlePromptSubmit = (data: PromptFormType) => {
    console.log(data);
    setIsGenerating(true);
    onPromptSubmit(data);
  };

  const onCancel = () => {
    setIsOpen(false);
  };

  return (
    <div className="space-y-6">
      {/* AI Script Generation Section */}
      <div className="bg-background rounded-lg p-6 border shadow">
        <div className="mb-4">
          <p className={cn(rubikNormal.className)}>Generate Script with AI</p>
          <div className="h-[3px] w-[5.5rem] bg-custom-gradient rounded-lg mt-1"></div>
        </div>

        <Form {...promptForm}>
          <form onSubmit={promptForm.handleSubmit(handlePromptSubmit)}>
            <Dialog open={isOpen} onOpenChange={() => setIsOpen(false)}>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle
                    className={cn(
                      rubikNormal.className,
                      "text-lg font-semibold"
                    )}
                  >
                    Please provide details about the video you would like our AI
                    to generate, including the topic, tone, style, and any
                    specific requirements.
                  </DialogTitle>
                </DialogHeader>
                <FormField
                  control={promptForm.control}
                  name="prompt"
                  render={({ field }) => (
                    <FormItem className="flex flex-col">
                      <FormControl>
                        <textarea
                          {...field}
                          rows={5}
                          className={cn(
                            interNormal.className,
                            "border-2 rounded-lg px-2 py-2 focus:border-2 focus:border-purple-600 bg-primary disabled:opacity-50"
                          )}
                          disabled={
                            promptForm.formState.isSubmitting || isGenerating
                          }
                          placeholder="Write your prompt here"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="flex items-center justify-end gap-2">
                  <ShadcnBtn
                    variant="outline"
                    disabled={promptForm.formState.isSubmitting || isGenerating}
                    onClick={() => setIsOpen(false)}
                    className={cn(rubikNormal.className)}
                  >
                    Cancel
                  </ShadcnBtn>
                  <Button
                    type="submit"
                    className={cn(rubikNormal.className, "py-2")}
                    disabled={promptForm.formState.isSubmitting || isGenerating}
                  >
                    Generate
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
            <Button
              type="button"
              onClick={() => setIsOpen(true)}
              className={cn(rubikNormal.className, "w-full py-2")}
              disabled={promptForm.formState.isSubmitting || isGenerating}
            >
              Generate Script with AI
            </Button>
          </form>
        </Form>
      </div>

      {/* Video Generation Form Section */}
      <div className="bg-background rounded-lg p-6 border shadow">
        <div className="mb-4">
          <p className={cn(rubikNormal.className)}>Video Options</p>
          <div className="h-[3px] w-[5.5rem] bg-custom-gradient rounded-lg mt-1"></div>
        </div>

        <Form {...scriptForm}>
          <form
            onSubmit={scriptForm.handleSubmit(handleScriptSubmit)}
            className="space-y-6"
          >
            <FormField
              control={scriptForm.control}
              name="script"
              render={({ field }) => (
                <FormItem>
                  <FormLabel
                    className={cn(
                      rubikNormal.className,
                      "text-base font-semibold"
                    )}
                  >
                    Write Your Script
                  </FormLabel>
                  <FormControl>
                    <textarea
                      {...field}
                      rows={10}
                      className={cn(
                        interNormal.className,
                        "w-full border-2 rounded-lg px-2 py-2 focus:border-2 focus:border-purple-600 bg-primary disabled:opacity-50"
                      )}
                      placeholder="Write your script here"
                      disabled={
                        scriptForm.formState.isSubmitting || isGenerating
                      }
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <FormField
                control={scriptForm.control}
                name="caption"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className={cn(rubikNormal.className)}>
                      Captions
                    </FormLabel>
                    <FormControl>
                      <SelectOptions
                        placeholder="Select caption"
                        options={captionOptions}
                        onChange={(value) => field.onChange(value)}
                        disabled={
                          scriptForm.formState.isSubmitting || isGenerating
                        }
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={scriptForm.control}
                name="voice_link"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className={cn(rubikNormal.className)}>
                      Voice
                    </FormLabel>
                    <FormControl>
                      <SelectOptions
                        placeholder="Select voice"
                        options={voiceOptions}
                        onChange={(value) => field.onChange(value)}
                        disabled={
                          scriptForm.formState.isSubmitting || isGenerating
                        }
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={scriptForm.control}
                name="video_length"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className={cn(rubikNormal.className)}>
                      Video Length
                    </FormLabel>
                    <FormControl>
                      <SelectOptions
                        placeholder="Select video length"
                        options={video_lengthOptions}
                        onChange={(value) => field.onChange(value)}
                        disabled={
                          scriptForm.formState.isSubmitting || isGenerating
                        }
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={scriptForm.control}
                name="aspect_ratio"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className={cn(rubikNormal.className)}>
                      Aspect Ratio
                    </FormLabel>
                    <FormControl>
                      <SelectOptions
                        placeholder="Select aspect ratio"
                        options={aspect_ratioOptions}
                        onChange={(value) => field.onChange(value)}
                        disabled={
                          scriptForm.formState.isSubmitting || isGenerating
                        }
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div>
              <p className={cn(rubikNormal.className)}>Advanced Options</p>
              <div className="h-[3px] w-[5.5rem] bg-custom-gradient rounded-lg mb-4"></div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <FormField
                  control={scriptForm.control}
                  name="folder"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className={cn(rubikNormal.className)}>
                        Folder
                      </FormLabel>
                      <SelectOptions
                        placeholder="Select folder"
                        options={folderOptions}
                        onChange={(value) => field.onChange(value)}
                        disabled={
                          scriptForm.formState.isSubmitting || isGenerating
                        }
                      />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            <div className="flex justify-end">
              <Button
                type="submit"
                className={cn(
                  rubikNormal.className,
                  "flex items-center gap-2 py-2"
                )}
                disabled={scriptForm.formState.isSubmitting || isGenerating}
              >
                <RiGeminiLine className="size-4" />
                Generate Video
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default VideoOptionsForm;
