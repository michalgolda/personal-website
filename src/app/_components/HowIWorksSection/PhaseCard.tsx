const PhaseCardColors = {
  PHASE_ONE: "before:bg-[#30E6FF] text-[#30E6FF]",
  PHASE_TWO: "before:bg-[#FFB930] text-[#FFB930]",
  PHASE_THREE: "before:bg-[#FF4930] text-[#FF4930]",
  PHASE_FOUR: "before:bg-[#B130FF] text-[#B130FF]",
};

export type PhaseCardProps = {
  title: string;
  headline: string;
  body: string;
  color: keyof typeof PhaseCardColors;
  className?: string;
};

export const PhaseCard: React.FC<PhaseCardProps> = ({
  title,
  headline,
  color,
  body,
  className,
  ...props
}) => {
  return (
    <div
      className={`flex flex-col gap-y-4 border border-solid border-lightGrey p-4 bg-white ${className}`}
      {...props}
    >
      <div className="flex flex-col">
        <span
          className={`before:block flex items-center gap-x-2 text-sm md:text-base font-semibold uppercase before:w-2 before:h-2 ${PhaseCardColors[color]}`}
        >
          {headline}
        </span>
        <h4 className="text-lg md:text-xl lg:text-2xl text-secondary font-bold text-secondary">
          {title}
        </h4>
      </div>
      <p className="text-body text-sm md:text-base">{body}</p>
    </div>
  );
};
