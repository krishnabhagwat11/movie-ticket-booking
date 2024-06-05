"use client";

import React from "react";
import Navbar from "./components/Navbar";
//import Card from './components/Card';
import Footer from "./components/Footer";
// import useDarkMode from './hooks/useDarkMode';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import Image from "next/image";

import { AspectRatio } from "@/components/ui/aspect-ratio";

const HomePage: React.FC = () => {
  // const { value: isDarkMode, toggle } = useDarkMode();
  return (
    
    <div className="bg-neutral-900">
      <Navbar />
      <main className="container mx-auto px-4 py-10">
        <h1 className="text-4xl font-bold text-center mb-8">
          Welcome to my movie ticket booking website.
        </h1>

        <Carousel className="main-carousel">
          <CarouselContent>
            <CarouselItem>
              <img
                src="../images/bg.jpeg"
                alt="Image 1"
                className="w-full h-[307px]"
              />
            </CarouselItem>
            <CarouselItem>
              <img
                src="../images/bg.jpeg"
                alt="Image 2"
                className="w-full h-[307px]"
              />
            </CarouselItem>
            <CarouselItem>
              <img
                src="../images/bg.jpeg"
                alt="Image 3"
                className="w-full h-[307px]"
              />
            </CarouselItem>
            <CarouselItem>
              <img
                src="../images/bg.jpeg"
                alt="Image 4"
                className="w-full h-[307px]"
              />
            </CarouselItem>
            <CarouselItem>
              <img
                src="../images/bg.jpeg"
                alt="Image 5"
                className="w-full h-[307px]"
              />
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>

        <style jsx>{`
          .show-all-button {
            transition: width 0.5s;
            overflow: hidden;
            width: 20px;
            white-space: nowrap;
          }

          .show-all-button:hover {
            width: 70px;
          }
        `}</style>

        <div className="flex justify-start items-baseline">
          <h2 className="text-3xl font-bold mt-10 mb-4 items-center">
            current movies
          </h2>
          <button
            onClick={() => (window.location.href = "/all-movies")} // Replace '/all-movies' with the path to your all movies list page
            className="hover:text-cyan-400 font-bold py-2 px-4 mt-10 mb-4 show-all-button"
          >
            Show All
          </button>
        </div>

        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full"
        >
          <CarouselContent>
            <CarouselItem className="basis-1/5">
              <img src="../images/bg.jpeg" alt="Image 1" className="rounded" />
            </CarouselItem>
            <CarouselItem className="basis-1/5">
              <img src="../images/bg.jpeg" alt="Image 2" className="rounded" />
            </CarouselItem>
            <CarouselItem className="basis-1/5">
              <img src="../images/bg.jpeg" alt="Image 3" className="rounded" />
            </CarouselItem>
            <CarouselItem className="basis-1/5">
              <img src="../images/bg.jpeg" alt="Image 4" className="rounded" />
            </CarouselItem>
            <CarouselItem className="basis-1/5">
              <img src="../images/bg.jpeg" alt="Image 5" className="rounded" />
            </CarouselItem>
            <CarouselItem className="basis-1/5">
              <img src="../images/bg.jpeg" alt="Image 6" className="rounded" />
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>

        <h2 className="text-3xl font-bold mt-10 mb-4">events</h2>

        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full"
        >
          <CarouselContent>
            <CarouselItem className="basis-1/5">
              <img src="../images/bg.jpeg" alt="Image 1" className="rounded" />
            </CarouselItem>
            <CarouselItem className="basis-1/5">
              <img src="../images/bg.jpeg" alt="Image 2" className="rounded" />
            </CarouselItem>
            <CarouselItem className="basis-1/5">
              <img src="../images/bg.jpeg" alt="Image 3" className="rounded" />
            </CarouselItem>
            <CarouselItem className="basis-1/5">
              <img src="../images/bg.jpeg" alt="Image 4" className="rounded" />
            </CarouselItem>
            <CarouselItem className="basis-1/5">
              <img src="../images/bg.jpeg" alt="Image 5" className="rounded" />
            </CarouselItem>
            <CarouselItem className="basis-1/5">
              <img src="../images/bg.jpeg" alt="Image 6" className="rounded" />
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>

        <div className="w-full">
          <AspectRatio ratio={100 / 9} className="bg-muted">
            <Image
              src="/images/bg.jpeg"
              alt="Photo by Drew Beamer"
              className="rounded-[30px] object-cover pt-4 pr-4 pl-4 pb-4 mt-2 mb-2"
              layout="fill"
            />
          </AspectRatio>
        </div>

        <p className="text-lg mt-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut
          perspiciatis unde omnis iste natus error sit voluptatem accusantium
          doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
          inventore veritatis et quasi architecto beatae vitae dicta sunt
          explicabo.
        </p>

        <h2 className="text-3xl font-bold mt-10 mb-4">streams</h2>

        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full"
        >
          <CarouselContent>
            <CarouselItem className="basis-1/5">
              <img src="../images/bg.jpeg" alt="Image 1" className="rounded" />
            </CarouselItem>
            <CarouselItem className="basis-1/5">
              <img src="../images/bg.jpeg" alt="Image 2" className="rounded" />
            </CarouselItem>
            <CarouselItem className="basis-1/5">
              <img src="../images/bg.jpeg" alt="Image 3" className="rounded" />
            </CarouselItem>
            <CarouselItem className="basis-1/5">
              <img src="../images/bg.jpeg" alt="Image 4" className="rounded" />
            </CarouselItem>
            <CarouselItem className="basis-1/5">
              <img src="../images/bg.jpeg" alt="Image 5" className="rounded" />
            </CarouselItem>
            <CarouselItem className="basis-1/5">
              <img src="../images/bg.jpeg" alt="Image 6" className="rounded" />
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </main>

      <Footer />
    </div>
  );
};

export default HomePage;
