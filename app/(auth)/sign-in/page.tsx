import Logo from "@/components/logo";
import { SignInAuthForm } from "./components/auth-form";

const SignIn = () => {
  return (
    <div className="bg-primary min-h-screen">
      <header className="bg-background fixed inset-x-0 top-0 w-full flex items-center p-4 px-8 md:px-16">
        <Logo />
      </header>
      <SignInAuthForm />
    </div>
  );
};

export default SignIn;
