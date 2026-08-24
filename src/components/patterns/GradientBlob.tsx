export default function GradientBlob(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="424"
      height="538"
      viewBox="176 216 424 538"
      aria-hidden="true"
      {...props}
    >
      <linearGradient
        id="blob-gradient"
        x1="31.368%"
        y1="70.497%"
        x2="100%"
        y2="22.772%"
      >
        <stop offset="0%" style={{ stopColor: "var(--color-brand-start)" }} />
        <stop offset="100%" style={{ stopColor: "var(--color-brand-end)" }} />
      </linearGradient>
      {/* the design transposes this blob: it renders 424x538, not the path's own 538x424 */}
      <path
        fill="url(#blob-gradient)"
        transform="matrix(0 1 1 0 0 0)"
        d="M233.996 231.082c-62.714 60.37 48.746 169.37 176.07 259.677 127.324 90.307 187.825 151.88 269.763 73.005 81.938-78.874 114.518-247.228 0-332.682-114.518-85.453-383.12-60.369-445.833 0z"
      />
    </svg>
  );
}
