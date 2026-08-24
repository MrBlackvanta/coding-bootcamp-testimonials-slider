import { TestimonialSlider } from "@/components";
import { Attribution } from "@/components/layout";
import { Curve } from "@/components/patterns";

export default function Home() {
  return (
    <>
      <Curve className="pointer-events-none absolute bottom-0 left-0 h-auto w-[calc(var(--card)*1.13)] text-pale" />
      <main className="relative grid flex-1 place-items-center overflow-x-clip">
        <h1 className="sr-only">Coding bootcamp testimonials</h1>
        <TestimonialSlider />
      </main>
      <Attribution />
    </>
  );
}
