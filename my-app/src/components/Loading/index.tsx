import React from "react";
import { StyledLoading } from "./styled";

export interface LoadingProps {}

const Loading: React.SFC<LoadingProps> = () => {
  return (
    <StyledLoading>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </StyledLoading>
  );
};

export default Loading;
