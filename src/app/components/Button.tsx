"use client";

type ButtonVariant =
  | "primary"
  | "secondary"
  | "destructive"
  | "ghost"
  | "outline"
  | "success"
  | "warning"
  | "link";
interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: ButtonVariant;
  disabled?: boolean;
  fullWidth?: boolean;
  icon?: React.ReactNode;
  loading?: boolean;
}

const getVariantClasses = (variant: ButtonVariant = "primary") => {
  const baseClasses =
    "px-6 py-3 font-medium rounded-lg transition-all duration-200 ";

  switch (variant) {
    case "primary":
      return (
        baseClasses + "bg-blue-600 text-white hover:bg-blue-700 active:scale-95"
      );
    case "secondary":
      return (
        baseClasses +
        "bg-gray-200 text-gray-900 hover:bg-gray-300 active:scale-95"
      );
    case "destructive":
      return (
        baseClasses + "bg-red-600 text-white hover:bg-red-700 active:scale-95"
      );
    case "ghost":
      return baseClasses + "bg-transparent text-blue-600 hover:bg-blue-50";
    case "outline":
      return (
        baseClasses + "border-2 border-blue-600 text-blue-600 hover:bg-blue-50"
      );
    case "success":
      return (
        baseClasses +
        "bg-green-600 text-white hover:bg-green-700 active:scale-95"
      );
    case "warning":
      return (
        baseClasses +
        "bg-yellow-500 text-white hover:bg-yellow-600 active:scale-95"
      );
    case "link":
      return baseClasses + "bg-transparent text-blue-600 hover:underline p-0";
    default:
      return baseClasses + "bg-blue-600 text-white";
  }
};

export default function Button({
  children,
  onClick,
  variant = "primary",
  disabled = false,
  fullWidth = false,
  icon,
  loading = false,
}: ButtonProps) {
  const isDisabled = disabled || loading;

  return (
    <button
      onClick={onClick}
      disabled={isDisabled}
      className={`
        ${getVariantClasses(variant)}
        ${fullWidth ? "w-full" : ""}
        ${isDisabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}
        ${variant === "link" ? "" : "focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"}
        flex items-center justify-center gap-2
      `}
    >
      {/* Loading spinner */}
      {loading && (
        <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
          />
        </svg>
      )}

      {!loading && icon && <span>{icon}</span>}

      {children}
    </button>
  );
}
