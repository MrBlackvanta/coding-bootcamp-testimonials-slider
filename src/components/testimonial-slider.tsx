import { testimonials } from "@/data";

import CardDecoration from "./card-decoration";

export default function TestimonialSlider() {
  const { portrait } = testimonials[0];

  return (
    <section
      aria-label="Testimonials"
      className="mx-auto grid w-full max-w-page grid-cols-1 gap-y-[calc(var(--card)/3)]"
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
    </section>
  );
}
