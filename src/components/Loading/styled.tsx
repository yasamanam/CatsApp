import {
  LIGHT_COLOR,
  MAIN_COLOR,
  TEXT_COLOR,
} from "./../../constants/stylingConstants";

import styled from "styled-components";

export const StyledLoading = styled.div`
  color: ${TEXT_COLOR};
  text-decoration: none;
  position: relative;
  width: 8rem;
  height: 8rem;
  margin: 4rem auto;

  div {
    position: absolute;
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    background: ${MAIN_COLOR};
    animation: lds-grid 1.2s linear infinite;
  }
  div:nth-child(1) {
    top: 0.6rem;
    left: 0.6rem;
    animation-delay: 0s;
  }
  div:nth-child(2) {
    top: 0.6rem;
    left: 32px;
    animation-delay: -0.4s;
  }
  div:nth-child(3) {
    top: 0.6rem;
    left: 56px;
    animation-delay: -0.6s;
  }
  div:nth-child(4) {
    top: 32px;
    left: 0.6rem;
    animation-delay: -0.4s;
  }
  div:nth-child(5) {
    top: 32px;
    left: 32px;
    animation-delay: -0.6s;
  }
  div:nth-child(6) {
    top: 32px;
    left: 56px;
    animation-delay: -1.2s;
  }
  div:nth-child(7) {
    top: 56px;
    left: 0.6rem;
    animation-delay: -0.6s;
  }
  div:nth-child(8) {
    top: 56px;
    left: 32px;
    animation-delay: -1.2s;
  }
  div:nth-child(9) {
    top: 56px;
    left: 56px;
    animation-delay: -1.6s;
  }
  @keyframes lds-grid {
    0%,
    100% {
      opacity: 1;
    }
    50% {
      opacity: 0.5;
    }
  }
`;
