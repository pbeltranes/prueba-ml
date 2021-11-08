import React from "react";
import Product from "../components/product";
import PropTypes, { InferProps } from "prop-types";

interface IProduct {
  id: string;
  image: number;
  price: string;
  quantity: string;
  title: string;
}
const ProductList = ({ products }: InferProps<typeof Product.propTypes>) => {
  return (
    <div>
      {products.map((product: IProduct) => {
        return <Product product={product} />;
      })}
    </div>
  );
};

export default ProductList;

Product.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      image: PropTypes.string,
      price: PropTypes.string,
      quantity: PropTypes.string,
      title: PropTypes.string,
    })
  ).isRequired,
};
