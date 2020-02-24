import React, { FC } from "react";
import styled from "styled-components";

const StyledDiv1 = styled.div`
  background-color: #0bd;
  height: 100px;
  margin-left: 80px;
  margin-top: 30px;
  width: 50px;
`;

const StyledDiv2 = styled.div`
  border-style: solid;
  border-width: 1px 4px 8px 12px;
  margin: 50px;
`;

const StyledDiv3 = styled.div`
  border-style: double;
  border-width: 8px;
  margin: 50px;
`;

const StyledDiv4 = styled.div`
  border-style: inset;
  border-width: 8px;
  margin: 50px;
`;

const StyledDiv5 = styled.div`
  border-color: tomato;
  border-style: inset;
  border-width: 8px;
  margin: 50px;
`;

const StyledP = styled.p`
  border-bottom: 2px solid #0bd;
  margin: 50px;
`;

const StyledUl = styled.ul`
  /* 左の点を含めるかどうか */

  /* list-style-position: inside; */
  list-style-type: decimal;
  margin-left: 50px;
`;

const StyledLi = styled.li`
  background-color: aqua;
`;

const C1: FC = () => (
  <>
    <StyledDiv1 />
    <StyledDiv2>txt</StyledDiv2>
    <StyledDiv3>txt</StyledDiv3>
    <StyledDiv4>txt</StyledDiv4>
    <StyledDiv5>txt</StyledDiv5>
    <StyledP>txt</StyledP>
  </>
);

const C2: FC = () => (
  <>
    <StyledUl>
      <StyledLi>りんご</StyledLi>
      <StyledLi>みかん</StyledLi>
      <StyledLi>ばなな</StyledLi>
    </StyledUl>
  </>
);

export const P4: FC = () => (
  <>
    <C1 />
    <C2 />
  </>
);
