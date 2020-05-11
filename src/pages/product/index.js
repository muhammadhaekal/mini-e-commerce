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
import LovedTrueImgSrc from "../../img/loved-true.png";
import LovedFalseImgSrc from "../../img/loved-false.png";
import ShareIconImgSrc from "../../img/share-icon.png";
import { addPurchasedHistory, toggleLoveStatus } from "../../redux/actions/app";

const Product = ({
  productList,
  match: {
    params: { id },
  },
  history: { goBack },
  addPurchasedHistory,
  toggleLoveStatus,
}) => {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const selectedProduct = productList.find((product) => product.id === id);
    setProduct(selectedProduct);
  }, [id, productList]);

  const handleBuyProduct = () => {
    addPurchasedHistory(product);
    window.alert("Purchase Successful");
  };

  const handleGoBack = () => {
    goBack();
  };

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText("text").then(
        function () {
          /* clipboard successfully set */
          window.alert("true");
        },
        function () {
          /* clipboard write failed */
          window.alert("false");
        }
      );
    } else {
      window.alert("web share not supported");
    }
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
            <ShareIconImg
              src={ShareIconImgSrc}
              onClick={handleShare}
            ></ShareIconImg>
          </ProductImg>
          <HeaderInfoWrapper>
            <ProductName>{product.title}</ProductName>
            <LikeIconImg
              src={product.loved === 1 ? LovedTrueImgSrc : LovedFalseImgSrc}
              onClick={() => toggleLoveStatus(product.id)}
            ></LikeIconImg>
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
  toggleLoveStatus: (id) => dispatch(toggleLoveStatus(id)),
});

const mapStateToProps = (store) => ({
  productList: store.app.productList,
});

export default connect(mapStateToProps, mapDispatchToProps)(Product);
