import { ChevronIcon } from "@/components/icons";

type Direction = "previous" | "next";

type SliderControlsProps = {
  onPrevious: () => void;
  onNext: () => void;
};

export default function SliderControls({
  onPrevious,
  onNext,
}: SliderControlsProps) {
  return (
    <div className="absolute bottom-0 left-1/2 flex h-[calc(var(--pill)/2)] w-(--pill) -translate-x-1/2 translate-y-1/2 rounded-full bg-white shadow-pill wide:left-15.5 wide:translate-x-0">
      <ControlButton
        direction="previous"
        label="Previous testimonial"
        onClick={onPrevious}
      />
      <ControlButton
        direction="next"
        label="Next testimonial"
        onClick={onNext}
      />
    </div>
  );
}

type ControlButtonProps = {
  direction: Direction;
  label: string;
  onClick: () => void;
};

function ControlButton({ direction, label, onClick }: ControlButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      className="grid flex-1 place-items-center rounded-full text-control transition-colors duration-150 hover:text-ink"
    >
      <ChevronIcon
        direction={direction}
        className="h-[calc(var(--pill)/7)] w-auto overflow-visible"
      />
    </button>
  );
}
