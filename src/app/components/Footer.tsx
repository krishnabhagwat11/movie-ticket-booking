// components/Footer.tsx
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Footer: React.FC = () => {
  return (
    <footer className="bg-regal-blue-100 text-zinc-700 px-4 py-2 text-center">
      <p>&copy; 2024 Movie Ticket Booking</p>

      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </footer>
  );
};

export default Footer;
