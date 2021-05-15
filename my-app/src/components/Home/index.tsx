import React, { useEffect, useState } from "react";
import { StyledButton, StyledHome, StyledPics } from "./styled";

import Loading from "./../Loading";
import { connect } from "react-redux";
import { getACategory } from "./../../redux/modules/cats/getACategory/action";
import { useParams } from "react-router-dom";

export interface HomeProps {}

const Home: React.SFC<HomeProps> = ({}) => {
  return <StyledHome>Select a category</StyledHome>;
};

export default Home;
