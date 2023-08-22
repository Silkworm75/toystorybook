import React from "react";

interface LoadingSpinnerProps {
  style:
    | "loading-spinner"
    | "loading-dots"
    | "loading-ring"
    | "loading-ball"
    | "loading-bars"
    | "loading-infinity";
  size: "default" | "loading-xs" | "loading-sm" | "loading-md" | "loading-lg";
  color:
    | "text-primary"
    | "text-secondary"
    | "text-accent"
    | "text-neutral"
    | "text-info"
    | "text-success"
    | "text-warning"
    | "text-error";
}

function LoadingSpinner({ style, size, color }: LoadingSpinnerProps) {
  return (
    <div className="h-[calc(20vh)]">
      <span className={`loading ${color} ${style} ${size}`}></span>
    </div>
  );
}

export default LoadingSpinner;
