interface ButtonProps {
  children: React.ReactNode;
  variant?: "solid" | "outline";
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
  ping?: boolean;
}

const Button = ({
  children,
  variant = "solid",
  onClick,
  className = "",
  type = "button",
  ping = false
}: ButtonProps) => {
  const baseStyles =
    "relative inline-flex items-center justify-center px-6 py-2 rounded-full transition font-medium text-sm md:text-base";

  const variants = {
    solid: "bg-crimsonWine text-white hover:bg-red-800",
    outline:
      "border border-crimsonWine text-crimsonWine hover:bg-crimsonWine hover:text-white"
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
          className="absolute inset-0 rounded-full bg-crimsonWine opacity-30 animate-ping z-0 pointer-events-none"
          aria-hidden="true"
        />
      )}

      {/* Button text */}
      <span className="relative z-10">{children}</span>
    </button>
  );
};

export default Button;
