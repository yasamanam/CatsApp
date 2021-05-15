import {
  LIGHT_COLOR,
  MAIN_COLOR,
  TEXT_COLOR,
  TOUCH,
} from "./../../constants/stylingConstants";

import styled from "styled-components";

export const StyledSideBox = styled.div`
  position: relative;
  width: ${(props) => (!props.isOpen ? "5rem" : "20rem")};
  transition: all ease 0.3s;

  @media (max-width: ${TOUCH}) {
    position: fixed;
    z-index: 10;
    width: ${(props) => (!props.isOpen ? "0" : "100vw")};
  }
`;

export const StyledSideBar = styled.div`
  background-color: ${LIGHT_COLOR};
  color: ${TEXT_COLOR};
  height: 100vh;
  padding: 2rem 0;
  box-shadow: 2px 3px 12px #0706061a;
  transition: all ease 0.3s;
  overflow: hidden;
  z-index: 1;
  padding-top: 5rem;
  transform: translateX(${(props) => (!props.isOpen ? "-100%" : "0")});
  width: ${(props) => (!props.isOpen ? "0" : "20rem")};
`;

export const StyledToggler = styled.button`
  margin: 1rem;
  color: ${TEXT_COLOR};
  background-color: transparent;
  width: 5rem;
  border: none;
  cursor: pointer;
  position: absolute;
  left: 0;
  z-index: 10;

  .line1,
  .line2,
  .line3 {
    width: 3.5rem;
    height: 0.5rem;
    background-color: ${TEXT_COLOR};
    margin: 0.6rem 0;
    transition: 0.4s;
  }
`;

export const StyledLinks = styled.div`
  a {
    margin: 0;
    padding: 0 0 2rem 0;
    font-size: 1.6rem;
    text-align: left;
    color: ${TEXT_COLOR};
    text-decoration: none;
    display: block;
    margin: 1rem 0;
    padding: 1rem 2rem;
  }

  a:hover {
    font-weight: bold;
    color: ${MAIN_COLOR};
  }

  .active {
    background: ${MAIN_COLOR};
    color: ${LIGHT_COLOR};
    font-weight: bold;
  }

  .active:hover {
    color: ${LIGHT_COLOR};
  }
`;
