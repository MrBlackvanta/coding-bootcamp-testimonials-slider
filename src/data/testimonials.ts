import type { StaticImageData } from "next/image";

import imageAbdelrhman from "@/assets/image-abdelrhman.webp";
import imageTomas from "@/assets/image-tomas.webp";

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  portrait: StaticImageData;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "“ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ”",
    name: "Abdelrhman Abdelaal",
    role: "Junior Front-end Developer",
    portrait: imageAbdelrhman,
  },
  {
    quote:
      "“ I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. ”",
    name: "Tomas Sinclair",
    role: "UX Engineer",
    portrait: imageTomas,
  },
];
