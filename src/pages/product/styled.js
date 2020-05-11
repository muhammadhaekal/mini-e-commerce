import styled from "styled-components";

export const Wrapper = styled.div``;

export const ProductCard = styled.div`
  padding: 15px;
`;

export const ProductImg = styled.div`
  width: 100%;
  background: url(${(props) => props.background});
  height: 185px;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  position: relative;
`;

export const ShareIconImg = styled.img`
  width: 32px;
  height: 32px;
  position: absolute;
  right: 15px;
  top: 15px;
`;

export const BackIconImg = styled.img`
  width: 32px;
  height: 32px;
  position: absolute;
  left: 15px;
  top: 15px;
`;

export const HeaderInfoWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 8px 0;
`;

export const ProductName = styled.div`
  width: 100%;
  color: rgb(54, 69, 79);
  font-size: 14px;
`;

export const LikeIconImg = styled.img`
  width: 38px;
  height: 38px;
`;

export const DescriptionWrapper = styled.div`
  text-align: justify;
  padding: 8px;
  background-color: rgb(248, 248, 248);
  border-radius: 10px;
  color: rgb(54, 69, 79);
  font-size: 14px;
`;

export const FooterInfoWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 8px;
`;

export const ProductPrice = styled.div`
  width: 100%;
  text-align: right;
  color: rgb(217, 0, 27);
  font-weight: 700;
  margin-right: 8px;
`;

export const BuyButton = styled.div`
  background-color: rgb(112, 203, 207);
  font-weight: 600;
  color: #ffffff;
  padding: 10px 18px;
  font-size: 16px;
  border-radius: 4px;
`;

export const TextToShare = styled.textarea`
  margin-left: -100vw;
  position: fixed;
`;
