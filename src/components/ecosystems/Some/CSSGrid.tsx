import React, { FC } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: grid;
  gap: 10px;
  grid-template-columns: 1fr 2fr;
  grid-template-rows:
    200px
    100px
    50px;
`;

const Item = styled.div`
  background: #0bd;
  color: #fff;
`;

export const CSSGrid: FC = () => (
  <>
    <h1>CssGridなのだよ</h1>
    <Container>
      <Item>Aaa</Item>
      <Item>Bbb</Item>
      <Item>Ccc</Item>
      <Item>Ddd</Item>
      <Item>Eee</Item>
      <Item>Fff</Item>
    </Container>
  </>
);
