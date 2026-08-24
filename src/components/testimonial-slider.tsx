"use client";

import { useState } from "react";

import { testimonials } from "@/data";

import CardDecoration from "./card-decoration";
import SliderControls from "./slider-controls";
import TestimonialQuote from "./testimonial-quote";

export default function TestimonialSlider() {
  const [index, setIndex] = useState(0);

  const step = (delta: number) =>
    setIndex(
      (current) =>
        (current + delta + testimonials.length) % testimonials.length,
    );

  const handleKeyDown = (event: React.KeyboardEvent<HTMLElement>) => {
    if (event.key === "ArrowLeft") step(-1);
    if (event.key === "ArrowRight") step(1);
  };

  return (
    <section
      aria-label="Testimonials"
      aria-live="polite"
      onKeyDown={handleKeyDown}
      className="mx-auto grid w-full max-w-page grid-cols-1 gap-y-[calc(var(--card)*0.32)] px-8 wide:px-0"
    >
      <div className="relative col-start-1 row-start-1 aspect-square w-(--card) justify-self-center wide:justify-self-end">
        <CardDecoration />
        <div className="absolute inset-0 rounded-card bg-white shadow-card">
          {testimonials.map((testimonial, slide) => (
            <img
              key={testimonial.name}
              src={testimonial.portrait.src}
              width={testimonial.portrait.width}
              height={testimonial.portrait.height}
              alt=""
              fetchPriority={slide === 0 ? "high" : "low"}
              className={`absolute inset-0 size-full rounded-card object-cover motion-safe:transition-[opacity,visibility] motion-safe:duration-300 ${slide === index ? "opacity-100" : "invisible opacity-0"}`}
            />
          ))}
        </div>
        <SliderControls onPrevious={() => step(-1)} onNext={() => step(1)} />
      </div>
      {testimonials.map((testimonial, slide) => (
        <TestimonialQuote
          key={testimonial.name}
          quote={testimonial.quote}
          name={testimonial.name}
          role={testimonial.role}
          active={slide === index}
        />
      ))}
    </section>
  );
}
