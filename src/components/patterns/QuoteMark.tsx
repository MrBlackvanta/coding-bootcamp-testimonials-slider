export default function QuoteMark(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="120"
      height="100"
      viewBox="0 0 120 100"
      aria-hidden="true"
      {...props}
    >
      <linearGradient
        id="quote-gradient"
        x1="31.368%"
        y1="72.917%"
        x2="100%"
        y2="19.557%"
      >
        <stop offset="0%" style={{ stopColor: "var(--color-brand-start)" }} />
        <stop offset="100%" style={{ stopColor: "var(--color-brand-end)" }} />
      </linearGradient>
      <path
        fill="url(#quote-gradient)"
        fillOpacity="0.15"
        fillRule="evenodd"
        d="M52.615 0L24.858 100H0V0h52.615zM120 0L92.243 100H67.385V0H120z"
      />
    </svg>
  );
}
