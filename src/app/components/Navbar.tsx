// components/Navbar.tsx
import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import SearchBar from "./SearchBar";

const Navbar: React.FC = () => {
  return (
    <>
      <nav className="bg-regal-blue-300 bg-opacity-90 text-white px-4 py-2 flex justify-between items-center backdrop-filter backdrop-blur-lg shadow-lg">
        <a href="/">
          <h1 className="text-xl font-bold">movieCo</h1>
        </a>

        <SearchBar />

        {/* location */}

        <div className="flex items-center space-x-4">
          <div className="flex">
            <div>
              <Link href="/login">
                <Button variant="ghost">Login</Button>
              </Link>
            </div>
            <div>
              <Sheet>
                <SheetTrigger asChild>
                  <Button>Profile</Button>
                </SheetTrigger>
                <SheetContent>
                  <SheetHeader>
                    <SheetTitle>Edit profile</SheetTitle>
                    <SheetDescription>
                      Make changes to your profile here. Click save when you're
                      done.
                    </SheetDescription>
                  </SheetHeader>
                    
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </nav>
      <nav className="bg-regal-blue-100 px-4 py-2 text-zinc-700 flex justify-between items-center backdrop-filter backdrop-blur-lg rounded-b-xl">
        <ul className="flex space-x-4">
          <li>
            <Link href="/movies">Movies</Link>
          </li>
          <li>
            <Link href="/events">Events</Link>
          </li>
          <li>
            <Link href="/finds">Finds</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
