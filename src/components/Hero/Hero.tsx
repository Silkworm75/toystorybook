import React from "react";

type Props = {
  title?: string;
  description?: string;
  bgColor?: string;
  bgImage?: boolean;
  bgImageOnly?: boolean;
  height?: "full" | "half";
};

function Hero({
  title,
  description,
  bgColor,
  bgImage,
  height,
  bgImageOnly,
}: Props) {
  return (
    <div
      className={`hero ${
        height === "full" ? "h-[calc(100vh-80px)]" : "h-[calc(50vh)]"
      } ${!bgColor ? "bg-base-200" : ""}`}
      style={{
        backgroundColor: bgColor ? bgColor : "",
        backgroundImage: bgImage ? `url(https://picsum.photos/1280/720)` : "",
      }}
    >
      {bgImage && !bgImageOnly && (
        <div className="hero-overlay bg-opacity-60"></div>
      )}

      {!bgImageOnly && (
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">{title}</h1>
            <p className="py-6">{description}</p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      )}
    </div>
  );
}

Hero.defaultProps = {
  title: "Hero Title",
  description:
    " Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.",
  bgImage: false,
  bgImageSrc: null,
  fullHeight: "full",
  bgImageOnly: false
};
export default Hero;
