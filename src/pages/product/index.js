import React, { useState, useEffect } from "react";
import {
  Wrapper,
  ProductImg,
  ShareIconImg,
  BackIconImg,
  ProductName,
  HeaderInfoWrapper,
  LikeIconImg,
  ProductCard,
  DescriptionWrapper,
  FooterInfoWrapper,
  ProductPrice,
  BuyButton,
} from "./styled";
import { connect } from "react-redux";
import LeftArrowImgSrc from "../../img/left-arrow.png";
import { addPurchasedHistory } from "../../redux/actions/app";

const Product = ({
  productList,
  match: {
    params: { id },
  },
  history: { push, goBack },
  addPurchasedHistory,
}) => {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const selectedProduct = productList.find((product) => product.id === id);
    setProduct(selectedProduct);
  }, [id, productList]);

  const handleBuyProduct = () => {
    addPurchasedHistory(product);
    push("/history");
  };

  const handleGoBack = () => {
    goBack();
  };

  return (
    <Wrapper>
      {product && (
        <ProductCard>
          <ProductImg background={product.imageUrl}>
            <BackIconImg
              src={LeftArrowImgSrc}
              onClick={handleGoBack}
            ></BackIconImg>
            <ShareIconImg src={LeftArrowImgSrc}></ShareIconImg>
          </ProductImg>
          <HeaderInfoWrapper>
            <ProductName>{product.title}</ProductName>
            <LikeIconImg src={LeftArrowImgSrc}></LikeIconImg>
          </HeaderInfoWrapper>
          <DescriptionWrapper>{product.description}</DescriptionWrapper>
          <FooterInfoWrapper>
            <ProductPrice>{product.price}</ProductPrice>
            <BuyButton onClick={handleBuyProduct}>Buy</BuyButton>
          </FooterInfoWrapper>
        </ProductCard>
      )}
    </Wrapper>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addPurchasedHistory: (product) => dispatch(addPurchasedHistory(product)),
});

const mapStateToProps = (store) => ({
  productList: store.app.productList,
});

export default connect(mapStateToProps, mapDispatchToProps)(Product);
