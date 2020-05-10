import React, { useState, useEffect, useRef } from "react";
import {
  CategoriesWrapper,
  CategoryCard,
  CategoryImg,
  CategoryName,
  ProductWrapper,
  ProductCard,
  ProductTitle,
  ProductImg,
  LikeIconImg,
  NavBarWrapper,
  SearchBarWrapper,
  SarchBarIcon,
  SearchInputWrapper,
  SearchIconImg,
  SearchInput,
} from "./styled";
import LikeTrueImgSrc from "../../img/loved-true.png";
import LikeFalseImgSrc from "../../img/loved-false.png";
import SearchIconImgSrc from "../../img/search-icon.png";

const Home = () => {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const searchBarImg = useRef(null);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API}/home`, {
      method: "GET",
    })
      .then((res) => {
        if (res.status !== 200) {
          throw new Error({ message: "Error fetching data" });
        } else {
          return res.json();
        }
      })
      .then((res) => {
        if (res && res[0] && res[0].data) {
          setCategories(res[0].data.category);
          setProducts(res[0].data.productPromo);
        }
        // searchBarImg.current.src = SearchIconImgSrc;
      })
      .catch((err) => {
        window.alert(err.message);
      });
  }, []);

  return (
    <React.Fragment>
      <SearchBarWrapper>
        <SarchBarIcon ref={searchBarImg} src={LikeTrueImgSrc}></SarchBarIcon>
        <SearchInputWrapper>
          <SearchIconImg src={SearchIconImgSrc}></SearchIconImg>
          <SearchInput type="text" name="search-key"></SearchInput>
        </SearchInputWrapper>
      </SearchBarWrapper>
      <CategoriesWrapper>
        {categories &&
          categories.map((category) => (
            <CategoryCard>
              <CategoryImg
                src={category.imageUrl}
                alt={`img-${category.name}`}
              ></CategoryImg>
              <CategoryName>{category.name}</CategoryName>
            </CategoryCard>
          ))}
      </CategoriesWrapper>
      <ProductWrapper>
        {products &&
          products.map((product) => (
            <ProductCard>
              <ProductImg background={product.imageUrl}>
                <LikeIconImg
                  src={product.loved === 1 ? LikeTrueImgSrc : LikeFalseImgSrc}
                ></LikeIconImg>
              </ProductImg>
              <ProductTitle>{product.title}</ProductTitle>
            </ProductCard>
          ))}
      </ProductWrapper>
      <NavBarWrapper>
        <span>HOME</span>
        <span>FEED</span>
        <span>CART</span>
        <span>PROFILE</span>
      </NavBarWrapper>
    </React.Fragment>
  );
};

export default Home;
