const COLUMNS = 9;
const ROWS = 4;
const PITCH = 22;
const RADIUS = 3;

const width = (COLUMNS - 1) * PITCH + RADIUS * 2;
const height = (ROWS - 1) * PITCH + RADIUS * 2;

const dots = Array.from({ length: COLUMNS * ROWS }, (_, i) => ({
  cx: RADIUS + (i % COLUMNS) * PITCH,
  cy: RADIUS + Math.floor(i / COLUMNS) * PITCH,
}));

export default function DotGrid(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="currentColor"
      aria-hidden="true"
      {...props}
    >
      {dots.map(({ cx, cy }) => (
        <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r={RADIUS} />
      ))}
    </svg>
  );
}
