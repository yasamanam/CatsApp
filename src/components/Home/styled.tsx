import {
  LIGHT_COLOR,
  MAIN_COLOR,
  TEXT_COLOR,
} from "./../../constants/stylingConstants";

import styled from "styled-components";

export const StyledHome = styled.div`
  padding: 8rem 4rem;
  padding-bottom: 12rem;
  width: 100%;
  max-height: 100vh;
  overflow: auto;
  font-size: 2.8rem;
  margin-top: 0;
  color: ${TEXT_COLOR};
  text-align: center;
`;
