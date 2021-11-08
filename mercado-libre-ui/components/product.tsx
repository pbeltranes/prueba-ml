import React from "react";
import PropTypes, { InferProps } from "prop-types";
import Image from "next/image";
import Link from "next/link";
const Product: any = ({ product }: InferProps<typeof Product.propTypes>) => {
  const { id, image, price, title, owner } = product;
  console.log(id);
  return (
    <div className="container card columns is-centered general is-mobile">
      <div className="thumbnail column is-3 ">
        <Link href={`/items/${encodeURIComponent(id)}`}>
          <a>
            <Image
              loader={() => image}
              src={image}
              alt="Picture of the author"
              width={90}
              height={90}
            />
          </a>
        </Link>
      </div>
      <div className=" column">
        <div className="details">
          <div className="price is-size-5">{price}</div>
          <Link href={`/items/${encodeURIComponent(id)}`}>
            <div className="title is-size-6">{title}</div>
          </Link>
        </div>
      </div>
      <div className=" column is-1">{owner}</div>
    </div>
  );
};

export default Product;

Product.propTypes = {
  id: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  owner: PropTypes.string,
};

Product.defaultProps = {
  owner: "",
};
