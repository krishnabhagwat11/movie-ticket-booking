// components/Navbar.tsx
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import SearchBar from "./SearchBar";

const Navbar: React.FC = () => {
  return (
    <>
      <nav className="bg-amber-400 font-dm-serif bg-opacity-90 text-white px-4 py-4 flex justify-between items-center backdrop-filter backdrop-blur-lg shadow-lg">
        <a href="/">
        <h1 className="text-xl font-bold">movieCo</h1>
        </a>

        <SearchBar />

        {/* location */}

        <div className="flex items-center space-x-4">
          <div>
            <Link href="/login">
              <Button variant="ghost">Login</Button>
            </Link>
          </div>

          <div>
            <DropdownMenu>
              <DropdownMenuTrigger>Profile</DropdownMenuTrigger>
              <DropdownMenuContent className="bg-black text-white">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Billing</DropdownMenuItem>
                <DropdownMenuItem>Notification</DropdownMenuItem>
                <DropdownMenuItem>Subscription</DropdownMenuItem>
                <DropdownMenuItem>Stream Plateform</DropdownMenuItem>
                <DropdownMenuItem>Help & support</DropdownMenuItem>
                <DropdownMenuItem>Settings</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <div>
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </nav>
      <nav className="bg-emerald-800 px-4 py-2 text-white flex justify-between items-center backdrop-filter backdrop-blur-lg">
        <ul className="flex space-x-4">
          <li>
            <Link href="/movies">Movies</Link>
          </li>
          <li>
            <Link href="/events">Events</Link>
          </li>
          <li>
            <Link href="/streams">Streams</Link>
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
