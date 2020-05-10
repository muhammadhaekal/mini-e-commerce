import React from "react";
import {
  ProductWrapper,
  ProductCard,
  ProductTitle,
  ProductImg,
  LikeIconImg,
} from "./styled";
import LikeTrueImgSrc from "../../img/loved-true.png";
import LikeFalseImgSrc from "../../img/loved-false.png";

const Products = ({ products }) => {
  return (
    <ProductWrapper>
      {products &&
        products.map((product, i) => (
          <ProductCard key={i}>
            <ProductImg background={product.imageUrl}>
              <LikeIconImg
                src={product.loved === 1 ? LikeTrueImgSrc : LikeFalseImgSrc}
              ></LikeIconImg>
            </ProductImg>
            <ProductTitle>{product.title}</ProductTitle>
          </ProductCard>
        ))}
    </ProductWrapper>
  );
};

export default Products;
