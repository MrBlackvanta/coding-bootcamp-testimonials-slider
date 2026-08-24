type ChevronIconProps = React.SVGProps<SVGSVGElement> & {
  direction: "previous" | "next";
};

export default function ChevronIcon({ direction, ...props }: ChevronIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="8"
      height="16"
      viewBox="0 0 8 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      aria-hidden="true"
      {...props}
    >
      <path d={direction === "next" ? "M0 0l8 8-8 8" : "M8 0L0 8l8 8"} />
    </svg>
  );
}
