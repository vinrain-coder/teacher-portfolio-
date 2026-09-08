const MagicButton = ({
  title,
  icon,
  position,
  handleClick,
  otherClasses,
  type = "button",
  disabled,
}: {
  title: string;
  icon: React.ReactNode;
  position: string;
  handleClick?: () => void;
  otherClasses?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}) => {
  return (
    <button
      type={type}
      className="relative inline-flex h-12 w-full overflow-hidden rounded-full p-px focus:outline-none md:w-60 md:mt-10 disabled:opacity-50 disabled:cursor-not-allowed"
      onClick={handleClick}
      disabled={disabled}
    >
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,var(--color-secondary)_0%,var(--color-primary)_50%,var(--color-secondary)_100%)]" />
      <span
        className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-background px-7 text-sm font-medium text-foreground backdrop-blur-3xl gap-2 ${otherClasses}`}
      >
        {position === "left" && icon}
        {title}
        {position === "right" && icon}
      </span>
    </button>
  );
};

export default MagicButton;
