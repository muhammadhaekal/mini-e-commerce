import React from "react";
import {
  Wrapper,
  ProductCard,
  ProductImg,
  ProductInfoWrapper,
  ProductTitle,
  ProductPrice,
} from "./styled";

const FilteredProducts = ({ filteredProducts }) => {
  return (
    <Wrapper>
      {filteredProducts &&
        filteredProducts.map((filteredProduct) => (
          <ProductCard>
            <ProductImg background={filteredProduct.imageUrl}></ProductImg>
            <ProductInfoWrapper>
              <ProductTitle>{filteredProduct.title}</ProductTitle>
              <ProductPrice>{filteredProduct.price}</ProductPrice>
            </ProductInfoWrapper>
          </ProductCard>
        ))}
    </Wrapper>
  );
};

export default FilteredProducts;
