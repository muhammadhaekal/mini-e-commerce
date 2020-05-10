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
import LeftArrowImgSrc from "../../img/left-arrow.png";

const Home = () => {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [searchKey, setSearchKey] = useState("");
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
      })
      .catch((err) => {
        window.alert(err.message);
      });
  }, []);

  useEffect(() => {
    if (searchKey) {
      searchBarImg.current.src = LeftArrowImgSrc;
    } else {
      searchBarImg.current.src = LikeTrueImgSrc;
    }
  }, [searchKey]);

  return (
    <React.Fragment>
      <SearchBarWrapper>
        <SarchBarIcon ref={searchBarImg} src={LikeTrueImgSrc}></SarchBarIcon>
        <SearchInputWrapper>
          <SearchIconImg src={SearchIconImgSrc}></SearchIconImg>
          <SearchInput
            type="text"
            name="search-key"
            onChange={(e) => setSearchKey(e.target.value)}
          ></SearchInput>
        </SearchInputWrapper>
      </SearchBarWrapper>
      <CategoriesWrapper>
        {categories &&
          categories.map((category, i) => (
            <CategoryCard key={i}>
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
          products.map((product, i) => (
            <ProductCard key={i}>
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
        <span>Home</span>
        <span>Feed</span>
        <span>Cart</span>
        <span>Profile</span>
      </NavBarWrapper>
    </React.Fragment>
  );
};

export default Home;
