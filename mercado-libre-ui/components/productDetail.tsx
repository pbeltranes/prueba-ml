import React, { FunctionComponent } from "react";
import PropTypes, { InferProps } from "prop-types";
import Image from "next/image";

import { IS_NEW, LABELS } from "../lib/constants";
const ProductDetail: any = ({
  details,
}: InferProps<typeof ProductDetail.propTypes>) => {
  const {
    picture,
    title,
    price,
    description,
    condition,
    soldQuantity,
    freeShipping,
  } = details;

  const labelState = condition === IS_NEW ? LABELS.ES_NUEVO : LABELS.ES_USADO;
  return (
    <div>
      <div className="container columns is-centered is-mobile">
        <div className=" thumbnail column is-9">
          <Image
            loader={() => picture}
            src={picture}
            alt="Picture of the author"
            width={500}
            height={500}
          />
        </div>
        <div className="column">
          <div className="details">
            <div className="header is-size-6">
              {labelState} - {soldQuantity} vendidos
            </div>
            <div className="title is-size-3">{title}</div>
            <div className="big-price is-size-5">{price}</div>
            <div className="button info">{LABELS.BUY}</div>
          </div>
        </div>
      </div>
      <div className="container columns is-mobile">
        <div className="description column is-9">{description}</div>
      </div>
    </div>
  );
};
export default ProductDetail;

ProductDetail.propTypes = {
  picture: PropTypes.string.isRequired,
  header: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  condition: PropTypes.string.isRequired,
  soldQuantity: PropTypes.string.isRequired,
  freeShipping: PropTypes.string.isRequired,
};
