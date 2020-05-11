import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: rgb(225, 245, 245);
  padding: 15px;
`;

export const ProductCard = styled.div`
  display: flex;
  background-color: #ffffff;
  box-shadow: rgb(218, 218, 218) 0px 1px 8px 0px;
  border-radius: 10px;
  margin-bottom: 8px;
  padding: 8px;
`;

export const ProductImg = styled.div`
  height: 56px;
  width: 56px;
  background: url(${(props) => props.background});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  position: relative;
`;

export const ProductInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 4px;
  padding-left: 8px;
`;

export const ProductTitle = styled.div`
  color: rgb(54, 69, 79);
  font-size: 14px;
  margin-top: 10px;
  font-weight: 700;
`;

export const ProductPrice = styled.div`
  align-self: stretch;
  color: rgb(217, 0, 27);
  font-size: 14px;
  font-weight: 700;
`;
