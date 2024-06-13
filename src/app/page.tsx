"use client";

import React, { useState } from "react";
import Navbar from "./components/Navbar";
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
  const [isHovered, setIsHovered] = useState(false);
  // const { value: isDarkMode, toggle } = useDarkMode();
  return (
    <div className="bg-neutral-900">
      <Navbar />
      <main className="container mx-auto px-4 py-10">
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
            transition: width 0.5s ease-in-out, opacity 0.5s ease-in-out;
            overflow: hidden;
            width: 10px;
            white-space: nowrap;
            display: flex;
            align-items: center;
            justify-content: center;
            opacity: 0; /* Initially hidden */
            position: relative;
          }

          .show-all-button:hover {
            width: 100px;
            opacity: 1; /* Show text on hover */
          }

          /* Apply the animation to the span at all times, not just on hover */
          .show-all-button span {
            animation: text-glow 2s infinite ease-in-out;
            transition: text-shadow 0.5s ease-in-out;
          }

          @keyframes text-glow {
            0%,
            100% {
              text-shadow: 0 0 8px rgba(0, 255, 255, 0.5);
            }
            50% {
              text-shadow: 0 0 12px rgba(0, 255, 255, 0.9);
            }
          }
        `}</style>

        <div className="flex justify-start items-baseline">
          <h2 className="text-3xl font-bold mt-10 mb-6 items-center">
            current movies
          </h2>
          <button
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={() => (window.location.href = "/movies")}
            className="hover:text-cyan-400 font-bold py-2 px-4 mt-10 mb-4 show-all-button"
          >
            <span>{isHovered ? "show all >" : "show all >"}</span>
            <span>{isHovered ? " " : ""}</span>
            <span>{isHovered ? " " : ""}</span>
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
              <link href={`/movies/${movie.id}`}>
                <a>
                  <img
                    src="../images/bg.jpeg" alt="Image 1" className="rounded"
                  />
                </a>
              </link>
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

        <div className="flex justify-start items-baseline">
          <h2 className="text-3xl font-bold mt-10 mb-6 items-center">events</h2>
          <button
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={() => (window.location.href = "/movies")}
            className="hover:text-cyan-400 font-bold py-2 px-4 mt-10 mb-4 show-all-button"
          >
            <span>{isHovered ? "show all >" : "show all >"}</span>
            <span>{isHovered ? " " : ""}</span>
            <span>{isHovered ? " " : ""}</span>
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
      </main>

      <Footer />
    </div>
  );
};

export default HomePage;
