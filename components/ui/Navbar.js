
"use client";
import React, {useState, useEffect} from "react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ModeToggle } from "../theme-btn";

import LoadingBar from "react-top-loading-bar";
import { usePathname } from "next/navigation";


const Navbar = () => {

  const [progress, setProgress] = useState(0)
  const pathname = usePathname()

  useEffect(()=>{

    setProgress(30)

    setTimeout(() => {
      setProgress(50)
    }, 100);

    setTimeout(() => {
      setProgress(70)
    }, 500);

    setTimeout(() => {
      setProgress(100)
    }, 800);

  }, [pathname])

  useEffect(() => {
    setTimeout(() => {
      setProgress(0)
    }, 900);
  }, [pathname])
  

  return (
    <>
      <LoadingBar
        color='#f11946'
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      
      />
      <nav className="bg-background/50 sticky top-0 border-b backdrop-blur p-4 flex flex-col md:flex-row justify-between items-center">
        <div className="text-lg font-bold">BLOGGINGHUB</div>

        <div className="hidden md:flex gap-4 items-center">
          <Link href="/">Home</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
          <ModeToggle />
          <Button className="dark:bg-yellow-500">Login</Button>
          <Button className="dark:bg-yellow-500">Signup</Button>
        </div>
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger>
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Rioox</SheetTitle>
                <SheetDescription>
                  <div className="flex flex-col space-y-4">
                    <Link href="/">Home</Link>
                    <Link href="/about">About</Link>
                    <Link href="/contact">Contact</Link>
                  </div>
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
