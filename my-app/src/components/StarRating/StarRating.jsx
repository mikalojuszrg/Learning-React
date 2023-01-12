import { useState } from "react";
import { FaStar } from "react-icons/fa";
import "./StarRating.scss";

const StarRating = () => {
  const [rating, setRating] = useState(0);

  return (
    <div className="star-rating">
      {[...Array(5)].map((_, index) => {
        index += 1;
        return (
          <button
            type="button"
            key={index}
            className={index <= rating ? "on" : "off"}
            onClick={() => {
              console.log(index);
              setRating(index);
            }}
          >
            <span className="star">
              <FaStar />
            </span>
          </button>
        );
      })}
    </div>
  );
};

export default StarRating;
