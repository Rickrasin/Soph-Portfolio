interface ButtonProps {
  children: React.ReactNode;
  variant?:
    | "solidCrimsonWine"
    | "solidAmberOrange"
    | "outlineCrimsonWine"
    | "outlineAmberOrange";
  onClick?: () => void;
  bgColor?: string;
  className?: string;
  type?: "button" | "submit" | "reset";
  ping?: boolean;
}

const Button = ({
  children,
  variant = "solidCrimsonWine",
  onClick,
  className = "",
  type = "button",
  ping = false
}: ButtonProps) => {
  const baseStyles =
    "relative inline-flex items-center justify-center px-6 py-2 rounded-md transition-colors duration-300 font-medium text-sm md:text-base cursor-pointer ";

  const variants = {
    solidAmberOrange: "bg-amberOrange text-white hover:bg-amber-600",
    solidCrimsonWine: "bg-crimsonWine text-white hover:bg-red-800",
    outlineCrimsonWine:
      "border border-crimsonWine text-crimsonWine hover:bg-crimsonWine hover:text-white",
    outlineAmberOrange:
      "border border-amberOrange text-amberOrange hover:bg-amberOrange hover:text-white"
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {/* Ping background if active */}
      {ping && (
        <span
          className={`absolute inset-0 rounded-full opacity-30 animate-ping z-0 pointer-events-none `}
          aria-hidden="true"
        />
      )}

      {/* Button text */}
      <span
        className={`relative z-10 ${
          variant === "solidCrimsonWine" || variant === "outlineCrimsonWine"
            ? ""
            : "custom-selection"
        }`}
      >
        {children}
      </span>
    </button>
  );
};

export default Button;
