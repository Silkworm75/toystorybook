import { faker } from "@faker-js/faker";
import React from "react";

type Props = {
  starStyle: "default" | "orange";
};

function Rating({ starStyle }: Props) {
  const numIterations = 10;

  const rating = Math.round(
    faker.number.float({
      min: 1,
      max: 10,
      precision: 0.1,
    })
  );

  return (
    <div>
      <div className="rating">
        {Array.from({ length: numIterations }, (_, index) => (
          <input
            key={index}
            readOnly
            type="radio"
            value={index + 1}
            name="rating-1"
            className={`mask mask-star ${
              starStyle === "orange" ? " bg-orange-400" : ""
            }`}
            checked={rating === index + 1 ? true : false}
          />
        ))}
      </div>
    </div>
  );
}

export default Rating;
