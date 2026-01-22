"use client";

type ButtonVariant = "primary" | "secondary" | "destructive" | "ghost";
interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: ButtonVariant;
  disabled?: boolean;
  fullWidth?: boolean;
}

const getVariantClasses = (variant: ButtonVariant = "primary") => {
  const baseClasses = "px-6 font-medium rounded-lg transition-all duration-200";

  switch (variant) {
    case "primary":
      return `${baseClasses} bg-blue-600 text-white hover:bg-blue-700 active:scale-95`;
    case "secondary":
      return `${baseClasses} bg-gray-600 text-gray-900 hover:bg-gray-300 active:scale-95`;
    case "destructive":
      return `${baseClasses} bg-red-600 text-white hover:bg-red-700 active:scale-95`;
    case "ghost":
      return `${baseClasses} bg-transparent text-blue-600 hover:bg-gray-50`;
    default:
      return `${baseClasses} bg-blue-600 text-white`;
  }
};

export default function Button({
  children,
  onClick,
  variant = "primary",
  disabled = false,
  fullWidth = false,
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
      ${getVariantClasses(variant)}
      ${fullWidth ? "w-full" : ""}
      ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}
      focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
      `}
    >
      {children}
    </button>
  );
}
