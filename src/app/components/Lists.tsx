import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const ListsPage = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold mt-10 mb-4">All Movies</h2>
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
    </div>
  );
};

export default ListsPage;
