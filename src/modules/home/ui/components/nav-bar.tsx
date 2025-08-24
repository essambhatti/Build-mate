"use client";

import { Button } from "@/components/ui/button";
import UserControl from "@/components/user-controller";
import useScroll from "@/hooks/use-scroll";
import { cn } from "@/lib/utils";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
} from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const isScrolled = useScroll()
  return (
    <nav className={cn("p-4 bg-transparent fixed top-0 left-0 right-0 z-50 transition-all duration-200 border-b border-transparent",  isScrolled && "bg-background border-border")}>
      <div className="max-w-5xl mx-auto w-full flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          <Image src="logo.svg" alt="Zest" width={24} height={24} />
          <span className="font-semibold text-lg">Zest</span>
        </Link>
        <SignedOut>
          <div className="flex gap-2">
            <SignUpButton>
              <Button size="sm">Sign Up</Button>
            </SignUpButton>
            <SignInButton>
              <Button size="sm" variant="outline">
                Log In
              </Button>
            </SignInButton>
          </div>
        </SignedOut>
        <SignedIn>
          <UserControl />
        </SignedIn>
      </div>
    </nav>
  );
};

export default Navbar;
