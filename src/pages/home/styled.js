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

export const ProductWrapper = styled.div`
  padding: 10px;
  margin-top: 10px;
  background-color: rgb(225, 245, 245);
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

export const NavBarWrapper = styled.div`
  position: fixed;
  width: 100vw;
  bottom: 0;
  background-color: #70cbcf;
  color: white;
  display: flex;
  justify-content: space-between;
  padding: 8px 15px;
  font-weight: 700;
  font-size: 14px;
  box-sizing: border-box;
  box-shadow: rgb(218, 218, 218) 0px -1px 4px 0px;
`;

export const SearchBarWrapper = styled.div`
  display: flex;
  padding-top: 15px;
  padding-left: 15px;
  padding-right: 15px;
  margin-bottom: 12px;
`;

export const SarchBarIcon = styled.img`
  width: 38px;
  height: 38px;
  margin-right: 5px;
`;

export const SearchInputWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid rgb(218, 218, 218);
  width: 100%;
  border-radius: 10px;
  padding-left: 8px;
`;

export const SearchIconImg = styled.img`
  width: 24px;
  height: 24px;
`;

export const SearchInput = styled.input`
  margin-left: 8px;
  width: 100%;
  color: rgb(54, 69, 79);
  font-size: 14px;
  &:focus {
    outline: none;
  }
`;
