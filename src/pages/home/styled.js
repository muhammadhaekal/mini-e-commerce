import styled from "styled-components";

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
  width: 30px;
  height: 30px;
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
  box-shadow: rgb(218, 218, 218) 0px 1px 8px 0px;
`;

export const SearchIconImg = styled.img`
  width: 20px;
  height: 20px;
`;

export const SearchInput = styled.input`
  margin-left: 8px;
  width: 100%;
  color: rgb(54, 69, 79);
  font-size: 14px;
  margin-right: 8px;
  &:focus {
    outline: none;
  }
`;
