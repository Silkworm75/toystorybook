import React from "react";

interface ButtonProps {
  variant?:
    | "btn-neutral"
    | "btn-primary"
    | "btn-secondary"
    | "btn-success"
    | "btn-warning";
  size?: "default" | "btn-lg" | "btn-sm | btn-xs";
}

function Button({ variant = "btn-primary", size }: ButtonProps) {
  return <button className={`btn ${variant} ${size}`}>Button</button>;
}

export default Button;
