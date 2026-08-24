import { DotGrid, GradientBlob, PaleBlob, Zigzag } from "@/components/patterns";

export default function CardDecoration() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -translate-x-[2.7%] wide:translate-x-0"
    >
      <PaleBlob className="absolute -top-[11.67%] -left-[12.04%] h-auto w-[82.41%] text-pale" />
      <GradientBlob className="absolute top-[10.37%] left-[38.52%] h-auto w-[78.52%]" />
      <Zigzag className="absolute -top-[7.04%] left-[51.67%] h-auto w-[18.7%] overflow-visible text-zigzag" />
      <DotGrid className="absolute top-[94.63%] left-[78.33%] h-auto w-[33.7%] text-dots" />
    </div>
  );
}
