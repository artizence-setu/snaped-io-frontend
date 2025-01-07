"use client";
import z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/button";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { cn } from "@/lib/utils";
import { interMedium, interNormal } from "@/fonts/font";

const SignInAuthForm = () => {
  const [isLoading, setIsLoading] = useState(false);

  const formSchema = z.object({
    email: z.string().email(),
    password: z.string().min(6),
  });

  type FormType = z.infer<typeof formSchema>;

  const form = useForm<FormType>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data: FormType) => {
    console.log(data);
    setIsLoading(true);
  };

  return (
    <div className="flex items-center justify-center row-span-9 pb-8">
      <div
        className={cn(
          "bg-background max-w-md w-full rounded-lg p-4 shadow-lg",
          interNormal.className
        )}
      >
        <h2
          className={cn(
            "text-xl tracking-wide text-center",
            interMedium.className
          )}
        >
          SignUp To Snaped
        </h2>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      className="focus-visible:ring-[#9F62CA]"
                      placeholder="Enter your Email"
                      disabled={isLoading}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div>
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        type="password"
                        disabled={isLoading}
                        placeholder="Enter your Password"
                        className="focus-visible:ring-[#9F62CA]"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="w-full text-end mt-1">
                <Link
                  href="/forgot"
                  className="text-sm hover:underline text-[#4E43FA]"
                >
                  Forgot Password?
                </Link>
              </div>
            </div>
            <Button
              type="submit"
              disabled={isLoading}
              className="w-full text-lg font-extralight tracking-wide py-2"
            >
              {isLoading ? "Logging....." : "Login"}
            </Button>
          </form>
        </Form>
        <div className="text-base text-center mt-3">
          Don't have an account?{" "}
          <Link href="/sign-up" className="text-[#4E43FA]">
            Sign-up
          </Link>
        </div>
        <div className="relative my-3">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t" />
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="bg-background px-2 text-foreground">Or</span>
          </div>
        </div>
        <button
          disabled={isLoading}
          className="flex items-center justify-center p-2 border w-full rounded-md hover:opacity-70 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <FcGoogle className="size-5 mr-2" />
          Login with Google
        </button>
      </div>
    </div>
  );
};

export { SignInAuthForm };
