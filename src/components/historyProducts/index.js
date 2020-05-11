import React from "react";
import {
  Wrapper,
  ProductCard,
  ProductImg,
  ProductInfoWrapper,
  ProductTitle,
  ProductPrice,
} from "./styled";
import { Link } from "react-router-dom";

const HistoryProducts = ({ filteredProducts }) => {
  return (
    <Wrapper>
      {filteredProducts &&
        filteredProducts.map((filteredProduct) => (
          <Link
            to={`/product/${filteredProduct.id}`}
            style={{ textDecoration: "none" }}
          >
            <ProductCard>
              <ProductImg background={filteredProduct.imageUrl}></ProductImg>
              <ProductInfoWrapper>
                <ProductTitle>{filteredProduct.title}</ProductTitle>
                <ProductPrice>{filteredProduct.price}</ProductPrice>
              </ProductInfoWrapper>
            </ProductCard>
          </Link>
        ))}
    </Wrapper>
  );
};

export default HistoryProducts;
