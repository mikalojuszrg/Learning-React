import data from "../../data.js";
import Product from "../Product/Product2.jsx";

const ProductList = ({}) => {
  const products = data.map((item) => {
    return <Product {...item} starNumber={5} key={item.id} />;
  });
  return (
    <section>
      <h1>Best Sellers</h1>
      {products}
    </section>
  );
};

export default ProductList;
