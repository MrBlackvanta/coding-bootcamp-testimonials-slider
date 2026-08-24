import { QuoteMark } from "@/components/patterns";
import type { Testimonial } from "@/data";

type TestimonialQuoteProps = Pick<Testimonial, "quote" | "name" | "role">;

export default function TestimonialQuote({
  quote,
  name,
  role,
}: TestimonialQuoteProps) {
  return (
    <figure className="relative z-10 row-start-2 w-full max-w-panel justify-self-center text-center wide:col-start-1 wide:row-start-1 wide:mt-41 wide:self-start wide:justify-self-start wide:text-left">
      <QuoteMark className="absolute -top-(--mark-rise) left-1/2 h-auto w-(--mark) -translate-x-1/2 wide:left-24 wide:translate-x-0" />
      <blockquote className="relative text-quote font-light">
        <p>{quote}</p>
      </blockquote>
      <figcaption className="mt-5 flex flex-col text-name wide:mt-8 wide:flex-row wide:gap-2.5 wide:leading-[1.9]">
        <span className="font-bold">{name}</span>
        <span className="font-medium text-muted">{role}</span>
      </figcaption>
    </figure>
  );
}
