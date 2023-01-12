import React, { useState } from "react";
import PropTypes from "prop-types";
import { FaStar, FaRegStar } from "react-icons/fa";

const Product = (props) => {
  const { category, name, price } = props;

  const [color, setColor] = useState([
    "#000000",
    "#000000",
    "#000000",
    "#000000",
    "#000000",
  ]);

  return (
    <div className="product-div">
      <p className="category-div">{category}</p>
      <p className="name-div">{name}</p>
      <div className="stars">
        <FaRegStar
          style={{ color: color[0] }}
          onClick={() =>
            setColor(["#ffa500", "#000000", "#000000", "#000000", "#000000"])
          }
        />
        <FaRegStar
          style={{ color: color[1] }}
          onClick={() =>
            setColor(["#ffa500", "#ffa500", "#000000", "#000000", "#000000"])
          }
        />
        <FaRegStar
          style={{ color: color[2] }}
          onClick={() =>
            setColor(["#ffa500", "#ffa500", "#ffa500", "#000000", "#000000"])
          }
        />
        <FaRegStar
          style={{ color: color[3] }}
          onClick={() =>
            setColor(["#ffa500", "#ffa500", "#ffa500", "#ffa500", "#000000"])
          }
        />
        <FaRegStar
          style={{ color: color[4] }}
          onClick={() =>
            setColor(["#ffa500", "#ffa500", "#ffa500", "#ffa500", "#ffa500"])
          }
        />
      </div>
      <p className="price-div">{price}</p>
    </div>
  );
};

Product.propTypes = {
  category: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.string,
};

export default Product;
