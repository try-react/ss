import React, { FC, useState } from "react";
import styled from "styled-components";

type Props = {
  alignItems: string; // たぷる
};

const Container = styled.div<Props>`
  align-items: ${({ alignItems }) => alignItems};
  background-color: green;
  display: flex;
  height: 50vh;
  width: 90vh;
`;

const Item = styled.div`
  background-color: white;
  border: solid 1px;
  height: 100px;
  margin: 10px;
  width: 100px;
`;

const C1: FC = () => {
  const [alignItems, setAlignItems] = useState("center");
  return (
    <>
      <button type="button" onClick={() => setAlignItems("flex-end")}>
        flex-end
      </button>
      <Container {...{ alignItems }}>
        <Item>A</Item>
        <Item>B</Item>
      </Container>
    </>
  );
};

export const P6: FC = () => (
  <>
    <C1 />
  </>
);
