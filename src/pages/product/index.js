import React, { useState, useEffect, useRef } from "react";
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
  TextToShare,
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
  const textToShare = useRef(null);
  const shareUrlPrefix = `${window.location.origin}/product`;

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
    textToShare.current.select();
    document.execCommand("copy");
    window.alert("Link Copied to Clipboard!");
  };

  return (
    <Wrapper>
      {product && (
        <ProductCard>
          <TextToShare
            ref={textToShare}
          >{`${shareUrlPrefix}/${product.id}`}</TextToShare>
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
