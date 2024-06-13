// components/Navbar.tsx
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
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

import SearchBar from "./SearchBar";

const Navbar: React.FC = () => {
  return (
    <>
      <nav className="bg-regal-blue-300 bg-opacity-90 text-white px-4 py-4 flex justify-between items-center backdrop-filter backdrop-blur-lg shadow-lg">
        <a href="/">
          <h1 className="text-xl font-bold">movieCo</h1>
        </a>

        <SearchBar />

        {/* location */}

        <div className="flex items-center space-x-4">
          <div className="flex space-x-4">
            <div>
              <Link href="/login">
                <Button variant="ghost">Login</Button>
              </Link>
            </div>
            <div className="px-4 py-2">
              <Sheet>
                <SheetTrigger>Open</SheetTrigger>
                <SheetContent>
                  <SheetHeader>
                    <SheetTitle>Name</SheetTitle>
                    
                  </SheetHeader>
                </SheetContent>
              </Sheet>

              {/* <Link href="/">
                <Button variant="ghost">Profile</Button>
              </Link> */}
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
