import React, { useEffect, useState } from "react";
import {
  StyledLinks,
  StyledSideBar,
  StyledSideBox,
  StyledToggler,
} from "./styled";

import Loading from "./../Loading";
import { NavLink } from "react-router-dom";
import { clearCategory } from "./../../redux/modules/cats/getACategory/action";
import { connect } from "react-redux";
import { getCategories } from "./../../redux/modules/cats/getCategories/action";

export interface SideBarProps {
  getCategories: () => void;
  categories: { id: number; name: string }[];
  categoriesLoading: boolean;
  clearCategory: () => void;
}

const SideBar: React.SFC<SideBarProps> = ({
  getCategories,
  categories,
  categoriesLoading,
  clearCategory,
}) => {
  const [menu, setMenu] = useState(true);

  useEffect(() => {
    /*
     * Get categories
     */
    getCategories();
  }, []);

  const handletoggleMenu = () => {
    /*
     * Toggle menu
     */
    setMenu(!menu);
  };

  return (
    <StyledSideBox isOpen={menu}>
      <StyledToggler onClick={handletoggleMenu}>
        <div class="line1"></div>
        <div class="line2"></div>
        <div class="line3"></div>
      </StyledToggler>
      <StyledSideBar isOpen={menu}>
        <StyledLinks>
          {categoriesLoading ? (
            <Loading />
          ) : (
            categories?.map((category) => (
              <NavLink
                activeClassName="active"
                key={category.id}
                to={`/categories/${category.id}`}
              >
                {category.name}
              </NavLink>
            ))
          )}
        </StyledLinks>
      </StyledSideBar>
    </StyledSideBox>
  );
};

const mapStateToProps = (state: any) => ({
  categories: state.cats.categories.data,
  categoriesLoading: state.cats.categories.loading,
});

const mapDispatchToProps = (dispatch: any) => ({
  getCategories: () => {
    dispatch(getCategories());
  },
  clearCategory: () => {
    dispatch(clearCategory());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SideBar);
