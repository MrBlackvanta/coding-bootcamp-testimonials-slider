import { testimonials } from "@/data";

import CardDecoration from "./card-decoration";
import TestimonialQuote from "./testimonial-quote";

export default function TestimonialSlider() {
  const { portrait, quote, name, role } = testimonials[0];

  return (
    <section
      aria-label="Testimonials"
      className="mx-auto grid w-full max-w-page grid-cols-1 gap-y-[calc(var(--card)*0.32)] px-8 wide:px-0"
    >
      <div className="relative row-start-1 aspect-square w-(--card) justify-self-center wide:col-start-1 wide:justify-self-end">
        <CardDecoration />
        <img
          src={portrait.src}
          width={portrait.width}
          height={portrait.height}
          alt=""
          fetchPriority="high"
          className="absolute inset-0 size-full rounded-card object-cover shadow-card"
        />
      </div>
      <TestimonialQuote quote={quote} name={name} role={role} />
    </section>
  );
}
