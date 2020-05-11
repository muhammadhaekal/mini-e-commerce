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

const FilteredProducts = ({ filteredProducts }) => {
  return (
    <React.Fragment>
      {filteredProducts.length > 0 && (
        <Wrapper>
          {filteredProducts.map((filteredProduct, i) => (
            <Link
              to={`/product/${filteredProduct.id}`}
              style={{ textDecoration: "none" }}
              key={i}
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
      )}
    </React.Fragment>
  );
};

export default FilteredProducts;
