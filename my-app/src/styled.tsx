import { TOUCH } from "./constants/stylingConstants";
import styled from "styled-components";

export const StyledApp = styled.main`
  height: 100vh;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: 1fr 5fr;
  grid-template-rows: 1fr;
  transition: all ease 0.3s;

  @media (max-width: ${TOUCH}) {
    display: block;
  }
`;
