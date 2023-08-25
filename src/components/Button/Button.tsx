import React from "react";

interface ButtonProps {
  label: string;
  variant?:
    | "btn-neutral"
    | "btn-primary"
    | "btn-secondary"
    | "btn-success"
    | "btn-warning";
  size?: "default" | "btn-lg" | "btn-sm" | "btn-xs";
  onClick?: () => void;
}

/**
 * # The Button component
 * Lorem Ipsum
 */
const Button = ({
  label,
  variant = "btn-primary",
  size,
  ...props
}: ButtonProps) => {
  return (
    <button onClick={props.onClick} className={`btn ${variant} ${size}`}>
      {label}
    </button>
  );
}

export default Button;
