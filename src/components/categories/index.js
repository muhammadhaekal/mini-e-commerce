import React from "react";
import {
  CategoriesWrapper,
  CategoryCard,
  CategoryImg,
  CategoryName,
} from "./styled";
const Categories = ({ categories }) => {
  return (
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
  );
};

export default Categories;
