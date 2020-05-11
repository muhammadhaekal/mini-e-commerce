import React from "react";
import { connect } from "react-redux";
import HistoryProducts from "../../components/historyProducts";
import { SearchBarWrapper, LeftArrowIcon, SearchInputWrapper } from "./styled";
import LeftArrowImgSrc from "../../img/left-arrow.png";

const History = ({ purchasedHistory, history: { goBack } }) => {
  const handleGoBack = () => {
    goBack();
  };

  return (
    <div>
      <SearchBarWrapper>
        <LeftArrowIcon
          src={LeftArrowImgSrc}
          onClick={handleGoBack}
        ></LeftArrowIcon>
        <SearchInputWrapper>Purchased History</SearchInputWrapper>
      </SearchBarWrapper>
      <HistoryProducts filteredProducts={purchasedHistory}></HistoryProducts>
    </div>
  );
};

const mapStateToProps = (store) => ({
  purchasedHistory: store.app.purchasedHistory,
});

export default connect(mapStateToProps, null)(History);
