import React, { useState, useEffect, useRef } from "react";
import {
  NavBarWrapper,
  SearchBarWrapper,
  SarchBarIcon,
  SearchInputWrapper,
  SearchIconImg,
  SearchInput,
} from "./styled";
import LikeTrueImgSrc from "../../img/loved-true.png";
import SearchIconImgSrc from "../../img/search-icon.png";
import LeftArrowImgSrc from "../../img/left-arrow.png";
import { connect } from "react-redux";
import { setProductList, setFilteredProducts } from "../../redux/actions/app";
import Categories from "../../components/categories";
import Products from "../../components/products";

const Home = ({ setProductList, productList, setFilteredProducts }) => {
  const [categories, setCategories] = useState([]);
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
          setProductList(res[0].data.productPromo);
        }
      })
      .catch((err) => {
        window.alert(err.message);
      });
  }, [setProductList]);

  useEffect(() => {
    if (searchKey) {
      const newFilteredProduct = productList.filter((product) =>
        product.title.toLowerCase().includes(searchKey.toLowerCase())
      );
      setFilteredProducts(newFilteredProduct);
      searchBarImg.current.src = LeftArrowImgSrc;
    } else {
      searchBarImg.current.src = LikeTrueImgSrc;
    }
  }, [searchKey, productList, setFilteredProducts]);

  const renderMainContent = () => {
    if (searchKey) {
      return <React.Fragment>searching ...</React.Fragment>;
    } else {
      return (
        <React.Fragment>
          <Categories categories={categories}></Categories>
          <Products products={productList}></Products>
        </React.Fragment>
      );
    }
  };

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
      {renderMainContent()}
      <NavBarWrapper>
        <span>Home</span>
        <span>Feed</span>
        <span>Cart</span>
        <span>Profile</span>
      </NavBarWrapper>
    </React.Fragment>
  );
};

const mapDispatchToProps = (dispatch) => ({
  setProductList: (products) => dispatch(setProductList(products)),
  setFilteredProducts: (filteredProducts) =>
    dispatch(setFilteredProducts(filteredProducts)),
});

const mapStateToProps = (store) => ({
  productList: store.app.productList,
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
