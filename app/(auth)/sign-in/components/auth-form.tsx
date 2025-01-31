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
import { cn, setCookies } from "@/lib/utils";
import { interMedium, interNormal } from "@/fonts/font";
import axios, { isAxiosError } from "axios";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import { axiosInstance } from "@/lib/axios";
import { LoaderCircle } from "lucide-react";

const SignInAuthForm = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const formSchema = z.object({
    email: z.string().email("Invaild email"),
    password: z
      .string()
      .min(6, "Password must be at least 6 characters required"),
  });

  type FormType = z.infer<typeof formSchema>;

  const form = useForm<FormType>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(formSchema),
  });

  const encodedParams = new URLSearchParams();
  encodedParams.set("", "");

  // Submit function of login, here we can implement api for login
  const onSubmit = async (data: FormType) => {
    console.log(data);
    setIsLoading(true);

    const options = {
      method: "POST",
      url: "https://snaped.artizence.com/accounts/login/",
      headers: { "content-type": "application/x-www-form-urlencoded" },
      data: data,
    };

    try {
      const { data } = await axios.request(options);
      console.log(data);
      toast.success("Login Successfully");
    } catch (error) {
      toast.error("Something went wrong");
      console.error(error);
    }

    // try {
    //   const res = await axiosInstance.post("/accounts/login/", data);
    //   setCookies(res.data.token.access, res.data.token.refresh);
    //   toast.success(res.data.msg || "Login Successfully");
    //   router.push("/dashboard");
    // } catch (error) {
    //   if (isAxiosError(error)) {
    //     console.log("SIGNIN:", error);
    //     toast.error(error.response?.data.msg || "Something went wrong");
    //   } else {
    //     console.log("SIGNIN:", error);
    //     toast.error("Something went wrong");
    //   }
    // }
    setIsLoading(false);
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
              {isLoading ? (
                <>
                  <LoaderCircle className="animate-spin mr-2" /> Logging in.....
                </>
              ) : (
                "Login"
              )}
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
