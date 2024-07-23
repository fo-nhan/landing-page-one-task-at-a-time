import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

const Button: React.FC<
  ButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>
> = ({
  children,
  onClick = () => {},
  className = "",
  type = "button",
  disabled = false,
  ...props
}) => {
  return (
    <button
      {...props}
      onClick={onClick}
      className={`px-6 py-3 rounded-lg  ${className} ${
        disabled ? "opacity-50 cursor-not-allowed" : ""
      }`}
      type={type}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
