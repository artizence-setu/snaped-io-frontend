import { Button } from "@/components/button";
import { interNormal, rubikNormal } from "@/fonts/font";
import { cn } from "@/lib/utils";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { RiGeminiLine } from "react-icons/ri";
import Link from "next/link";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import SelectOptions from "@/components/select-options";
import Image from "next/image";

const examples = [
  { image: "/reel-1.png" },
  { image: "/reel-2.png" },
  { image: "/reel-3.png" },
  { image: "/reel-4.png" },
  { image: "/reel-5.png" },
  { image: "/reel-1.png" },
  { image: "/reel-2.png" },
  { image: "/reel-3.png" },
  { image: "/reel-4.png" },
  { image: "/reel-5.png" },
];

const formSchema = z.object({
  language: z.string().min(1, "Required"),
  caption: z.string().min(1, "Required"),
  voice: z.string().min(1, "Required"),
  videoLength: z.string().min(1, "Required"),
  aspectRatio: z.string().min(1, "Required"),
  captionPosition: z.string().optional().default("bottom"),
  videoQuality: z.string().optional().default("720"),
  captionAnimation: z.string().optional().default("faded"),
  backgroundMusic: z.string().optional().default("sadness_sunrise"),
  soundEffect: z.string().optional().default("drum_role"),
  animation: z.string().optional().default("animation1"),
  imageTransition: z.string().optional().default("fade"),
  folder: z.string().optional().default("home"),
});

type FormType = z.infer<typeof formSchema>;

interface VideoOptionsProps {
  defaultValues: FormType;
  onVideoOptionSubmit: (data: FormType) => void;
}

const VideoOptionsForm: React.FC<VideoOptionsProps> = ({
  onVideoOptionSubmit,
  defaultValues,
}) => {
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

  const videoLengthOptions = [
    { label: "5 Seconds", value: "5s" },
    { label: "10 Seconds", value: "10s" },
    { label: "15 Seconds", value: "15s" },
    { label: "30 Seconds", value: "30s" },
    { label: "1 Minute", value: "1m" },
    { label: "2 Minutes", value: "2m" },
    { label: "5 Minutes", value: "5m" },
  ];

  const aspectRatioOptions = [
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

  const form = useForm<FormType>({
    defaultValues: defaultValues || {},
    resolver: zodResolver(formSchema),
  });

  const handleSubmit = (data: FormType) => {
    console.log(data);
    onVideoOptionSubmit(data);
  };

  return (
    <div className="bg-background rounded-lg p-4 border shadow flex flex-col">
      <div className={cn(rubikNormal.className)}>
        <p>Video Options</p>
        <div className="h-[3px] w-[5.5rem] bg-custom-gradient rounded-lg"></div>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)}>
          {/* <div className="mt-4">
            <div
              className={cn(
                interNormal.className,
                "flex justify-between items-center mb-2"
              )}
            >
              <div>
                <p>Visual Style</p>
                <div className="h-[2px] w-[5.5rem] bg-custom-gradient"></div>
              </div>
              <Link href="#">
                <span className="text-[#1F8DD1]">View All</span>
                <div className="h-[2px] w-[3.8rem] bg-[#1F8DD1]"></div>
              </Link>
            </div>
            <div className="flex gap-2 overflow-auto">
              {examples.map((img, index) => {
                return (
                  <Image
                    className="p-1"
                    src={img.image}
                    alt="example"
                    width={120}
                    height={229}
                    key={index}
                  />
                );
              })}
            </div>
          </div> */}
          <div
            className={cn(
              "grid-cols-1 md:grid-cols-2 grid lg:grid-cols-4 gap-3 mt-4",
              interNormal.className
            )}
          >
            <FormField
              control={form.control}
              name="language"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Language</FormLabel>
                  <FormControl>
                    <SelectOptions
                      placeholder="Select a language"
                      options={languageOptions}
                      onChange={(value) => field.onChange(value)}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="caption"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Captions</FormLabel>
                  <FormControl>
                    <SelectOptions
                      placeholder="Select caption"
                      options={captionOptions}
                      onChange={(value) => field.onChange(value)}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="voice"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Voice</FormLabel>
                  <FormControl>
                    <SelectOptions
                      placeholder="Select voice"
                      options={voiceOptions}
                      onChange={(value) => field.onChange(value)}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="videoLength"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Video Length</FormLabel>
                  <FormControl>
                    <SelectOptions
                      placeholder="Select video length"
                      options={videoLengthOptions}
                      onChange={(value) => field.onChange(value)}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="aspectRatio"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Aspect Ratio</FormLabel>
                  <FormControl>
                    <SelectOptions
                      placeholder="Select aspect ratio"
                      options={aspectRatioOptions}
                      onChange={(value) => field.onChange(value)}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className={cn("my-4", rubikNormal.className)}>
            <p>Advanced Options</p>
            <div className="h-[3px] w-[5.5rem] bg-custom-gradient rounded-lg"></div>
          </div>
          <div className="grid-cols-1 md:grid-cols-2 grid lg:grid-cols-4 gap-4">
            <FormField
              control={form.control}
              name="captionPosition"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Caption Position</FormLabel>
                  <FormControl>
                    <SelectOptions
                      placeholder="Select caption position"
                      options={captionPositionOptions}
                      onChange={(value) => field.onChange(value)}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="captionAnimation"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Caption Animation</FormLabel>
                  <FormControl>
                    <SelectOptions
                      placeholder="Select caption animation"
                      options={captionAnimationOptions}
                      onChange={(value) => field.onChange(value)}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="folder"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Folder</FormLabel>
                  <FormControl>
                    <SelectOptions
                      placeholder="Select folder"
                      options={folderOptions}
                      onChange={(value) => field.onChange(value)}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>
          <div className="flex items-center justify-end">
            <Button type="submit" className="mt-4 flex items-center py-2">
              <RiGeminiLine className="mr-1 size-4" />
              Generate Video
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default VideoOptionsForm;
