import styled from "styled-components";

export const CategoriesWrapper = styled.div`
  display: flex;
  white-space: nowrap;
  overflow: auto;
  margin-left: 10px;
`;

export const CategoryCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 4px 0px;
  height: 65px;
  width: auto;
  margin: 5px;
  border-radius: 5px;
`;

export const CategoryImg = styled.img`
  width: 34px;
  height: 34px;
`;

export const CategoryName = styled.div`
  color: rgb(167, 167, 167);
  font-size: 10px;
  width: 75px;
  margin-top: 3px;
  text-align: center;
  white-space: nowrap;
  text-overflow: ellipsis;
`;
