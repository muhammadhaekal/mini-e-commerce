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
import FilteredProducts from "../../components/filteredProducts";
import { Link } from "react-router-dom";

const Home = ({
  setProductList,
  productList,
  setFilteredProducts,
  filteredProducts,
}) => {
  const [categories, setCategories] = useState([]);
  const [searchKey, setSearchKey] = useState("");
  const [isSearchActive, setIsSearchActive] = useState(false);

  const searchBarImg = useRef(null);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API}/home`)
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
      setIsSearchActive(true);
      searchBarImg.current.src = LeftArrowImgSrc;
    }
  }, [searchKey, productList, setFilteredProducts]);

  const renderMainContent = () => {
    if (isSearchActive) {
      return (
        <FilteredProducts
          filteredProducts={filteredProducts}
        ></FilteredProducts>
      );
    } else {
      return (
        <React.Fragment>
          <Categories categories={categories}></Categories>
          <Products products={productList}></Products>
        </React.Fragment>
      );
    }
  };

  const setSearchActive = () => {
    setIsSearchActive(true);
  };
  const setSearchInactive = () => {
    setIsSearchActive(false);
  };

  return (
    <React.Fragment>
      <SearchBarWrapper>
        <SarchBarIcon
          ref={searchBarImg}
          src={isSearchActive ? LeftArrowImgSrc : LikeTrueImgSrc}
          onClick={setSearchInactive}
        ></SarchBarIcon>
        <SearchInputWrapper>
          <SearchIconImg src={SearchIconImgSrc}></SearchIconImg>
          <SearchInput
            type="text"
            name="search-key"
            onChange={(e) => setSearchKey(e.target.value)}
            onFocus={setSearchActive}
          ></SearchInput>
        </SearchInputWrapper>
      </SearchBarWrapper>
      {renderMainContent()}
      <NavBarWrapper>
        <span>Home</span>
        <span>Feed</span>
        <span>Cart</span>
        <Link
          to={`/history`}
          style={{ textDecoration: "none", color: "#ffffffff" }}
        >
          <span>Profile</span>
        </Link>
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
  filteredProducts: store.app.filteredProducts,
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
