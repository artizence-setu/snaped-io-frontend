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
import { Checkbox } from "@/components/ui/checkbox";
import { Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/button";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";

const SignUpAuthForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const formSchema = z.object({
    name: z.string().min(3),
    email: z.string().email(),
    password: z.string().min(6),
    recieve_emails: z.boolean().default(false).optional(),
  });

  type FormType = z.infer<typeof formSchema>;

  const form = useForm<FormType>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      recieve_emails: false,
    },
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data: FormType) => {
    console.log(data);
    setIsLoading(true);
  };

  return (
    <div className="flex items-center justify-center row-span-9 pb-8">
      <div className="bg-background max-w-md w-full rounded-lg p-4 mt-16 shadow-lg">
        <h2 className="text-xl tracking-wide text-center">Signup To Snaped</h2>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input
                      className="focus-visible:ring-[#4E43FA]"
                      placeholder="Enter your name"
                      disabled={isLoading}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      className="focus-visible:ring-[#4E43FA]"
                      placeholder="Enter your Email"
                      disabled={isLoading}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Input
                        {...field}
                        disabled={isLoading}
                        type={showPassword ? "text" : "password"}
                        className="focus-visible:ring-[#4E43FA]"
                        placeholder="Enter your password"
                      />
                      <button
                        disabled={isLoading}
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute inset-y-0 right-0 pr-3 flex items-center text-[#4E43FA] hover:text-[#4E43FA]/70"
                      >
                        {showPassword ? (
                          <EyeOff size={20} />
                        ) : (
                          <Eye size={20} />
                        )}
                      </button>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div>
              <FormField
                control={form.control}
                name="recieve_emails"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex items-center gap-2">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                          disabled={isLoading}
                          className="data-[state=checked]:bg-[#4E43FA]"
                        />
                      </FormControl>
                      <p className="text-sm text-foreground/60">
                        Yes, I want to receive notification regarding offers,
                        newsletters and more.
                      </p>
                    </FormLabel>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <p className="text-sm mt-2">
                By continuing you agree to Our{" "}
                <span className="text-[#4E43FA]">Terms of Service</span> and{" "}
                <span className="text-[#4E43FA]">Privacy Policy</span>
              </p>
            </div>
            <Button
              type="submit"
              disabled={isLoading}
              className="w-full text-lg font-extralight tracking-wide py-2"
            >
              {isLoading ? "Creating....." : "Create Account"}
            </Button>
          </form>
        </Form>
        <div className="text-base text-center mt-3">
          Already have an account?{" "}
          <Link href="/sign-in" className="text-[#4E43FA]">
            Login
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
          Sign up with Google
        </button>
      </div>
    </div>
  );
};

export { SignUpAuthForm };
