"use client";
import { Button } from "@/components/button";
import Logo from "@/components/logo";
import { useState } from "react";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const LandingPageHeader = () => {
  const menuOptions = [
    "Features",
    "Blog",
    "Pricing",
    "Resources",
    "Contact Us",
  ];
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="sticky inset-x-0 top-0 bg-background flex items-center justify-between w-full px-4 sm:px-6 py-3">
      <Logo />
      <div className="hidden md:flex items-center gap-6">
        {menuOptions.map((option) => (
          <p
            key={option}
            className="text-sm font-medium hover:text-blue-600 cursor-pointer transition-colors"
          >
            {option}
          </p>
        ))}
      </div>
      <div className="hidden md:flex items-center gap-4">
        <button className="px-4 py-2 rounded-lg text-sm bg-transparent border hover:opacity-60 transition-all">
          Login
        </button>
        <Button className="py-2">Signup</Button>
      </div>
      {/* Mobile Menu */}
      <div className="md:hidden">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <button className="p-2 rounded-md border bg-transparent">
              <Menu className="size-5" />
            </button>
          </SheetTrigger>
          <SheetContent side="left" className="w-3/4 p-4">
            <div className="flex flex-col gap-6">
              <Logo />
              <nav className="flex flex-col gap-4 mt-8">
                {menuOptions.map((option) => (
                  <p
                    key={option}
                    className="text-lg w-full font-medium hover:text-blue-600 cursor-pointer transition-colors"
                  >
                    {option}
                  </p>
                ))}
              </nav>
              <div className="flex flex-col gap-4 mt-8">
                <button className="px-4 py-2 rounded-lg text-sm bg-transparent border hover:opacity-60 transition-all">
                  Login
                </button>
                <Button className="py-2 w-full">Signup</Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};

export default LandingPageHeader;
