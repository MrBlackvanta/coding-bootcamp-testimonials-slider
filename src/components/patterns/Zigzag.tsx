const ROW_TOPS = [0, 18, 36, 54];

const peaks = (top: number) =>
  [0, 20, 40, 60, 80, 100]
    .map((x, i) => `${x},${i % 2 === 0 ? top + 20 : top}`)
    .join(" ");

export default function Zigzag(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="104"
      height="78"
      viewBox="-2 -2 104 78"
      fill="none"
      stroke="currentColor"
      strokeWidth="4"
      aria-hidden="true"
      {...props}
    >
      {ROW_TOPS.map((top) => (
        <polyline key={top} points={peaks(top)} />
      ))}
    </svg>
  );
}
