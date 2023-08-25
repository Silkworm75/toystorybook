import React from "react";
import Image from "next/image";
import picture from "../../../public/images/pexels-magda-ehlers-1319572.jpg";
import Link from "next/link";

type CardProps = {
  title: string;
  text?: string | null;
  buttonLabel?: string | null;
  buttonLink: string;
  compact: boolean;
  badge?: null | string;
  imgSrc?: null | string;
  imgBottom?: boolean;
  cardSide?: boolean;
};

/**
 * # The Card component
 * Shows a Card
 */
const Card = ({
  title,
  text,
  buttonLabel,
  buttonLink,
  compact,
  badge,
  imgSrc,
  imgBottom,
  cardSide,
}: CardProps) => {
  const image = () => {
    let orientation = {
      w: !cardSide ? 1024 : 768,
      h: !cardSide ? 768 : 1024,
    };

    return (
      picture &&
      imgSrc && (
        <Link className="w-96" href={buttonLink} title={title}>
          <figure>
            <Image
              alt={title}
              src={
                imgSrc
                  ? imgSrc
                  : `https://picsum.photos/${orientation.w}/${orientation.h}`
              }
              width={orientation.w}
              height={orientation.h}
            />
          </figure>
        </Link>
      )
    );
  };

  return (
    <div
      className={`card ${compact ? "compact" : ""} ${
        cardSide ? "card-side w-1/2" : "w-96"
      }  bg-base-100 shadow-xl`}
    >
      {!imgBottom ? image() : null}
      <div className="card-body">
        {title && (
          <h2 className="card-title">
            {title}
            {badge && <div className="badge badge-secondary">{badge}</div>}
          </h2>
        )}
        {text && <p>{text}</p>}
        {buttonLabel && (
          <div className="card-actions justify-end">
            <Link href={buttonLink}>
              <button className="btn btn-primary">{buttonLabel}</button>
            </Link>
          </div>
        )}
      </div>
      {imgBottom && !cardSide ? image() : null}
    </div>
  );
}

Card.defaultProps = {
  text: "If a dog chews shoes whose shoes does he choose?",
  button: "Buy Now",
  compact: false,
  badge: null,
  imgBottom: false,
  cardSide: false,
};

export default Card;
