import {
  LIGHT_COLOR,
  MAIN_COLOR,
  TEXT_COLOR,
  TOUCH,
} from "./../../constants/stylingConstants";

import styled from "styled-components";

export const StyledGallery = styled.div`
  padding: 3.5rem 4rem;
  padding-bottom: 12rem;
  width: 100%;
  max-height: 100vh;
  overflow: auto;

  h1 {
    font-size: 2.8rem;
    margin-top: 0;
    padding-top: 0;
    color: ${MAIN_COLOR};

    @media (max-width: ${TOUCH}) {
      margin-top: 3rem;
    }
  }
`;

export const StyledPics = styled.div`
  max-width: 70rem;
  display: flex;
  flex-wrap: wrap;
  flex-grow: 1;
  margin: auto;

  div {
    width: 100%;
    height: fit-content;
    padding=0.5rem;
  }

  img {
    width: 100%;
    height: 100%;
    border-radius: 3rem;
  }
`;

export const StyledButton = styled.button`
  background: ${MAIN_COLOR};
  color: ${LIGHT_COLOR};
  font-weight: bold;
  font-size: 1.8rem;
  padding: 1.2rem 2rem;
  border-radius: 4rem;
  border: none;
  cursor: pointer;
  box-shadow: 0.2rem 0.3rem 1.2rem rgba(0, 0, 0, 0.3);
  float: right;
  margin: 20px;
  transition: all ease 0.3s;
  position: fixed;
  right: 20px;
  bottom: 20px;

  :hover {
    box-shadow: 0.2rem 0.3rem 1.2rem rgba(0, 0, 0, 0.2);
  }

  :active {
    box-shadow: none;
    transform: scale(0.98);
  }
`;
