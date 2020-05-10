import styled from "styled-components";

export const ProductWrapper = styled.div`
  padding: 10px;
  margin-top: 10px;
  background-color: rgb(225, 245, 245);
  padding-bottom: 33px;
`;
export const ProductCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #ffffff;
  border-radius: 10px;
  margin-bottom: 8px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 4px 0px;
`;

export const ProductTitle = styled.div`
  color: rgb(54, 69, 79);
  font-size: 12px;
  padding: 8px;
`;

export const ProductImg = styled.div`
  width: 100%;
  height: 115px;
  background: url(${(props) => props.background});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  position: relative;
`;

export const LikeIconImg = styled.img`
  width: 20px;
  height: 20px;
  position: absolute;
  left: 8px;
  bottom: 8px;
`;
