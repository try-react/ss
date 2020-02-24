import React, { FC, useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  border: solid 1px;
  margin: 10px;
`;

type Props = {
  flexDirection: string; // タプルにすべきだけど
  justifyContent: string;
};

const Container = styled.div<Props>`
  background-color: blue;
  display: flex;
  flex-direction: ${(p) => p.flexDirection};

  /* 折返し */
  flex-wrap: wrap;
  justify-content: ${(p) => p.justifyContent};
  margin: 10px;
`;

const Item = styled.div`
  background-color: orange;
  height: 200px;
  margin: 10px;
  padding: 2rem;
  width: 500px;
`;

const C1: FC = () => {
  const [flexDirection, setFlexDirection] = useState("row");
  const [justifyContent, setJustifyContent] = useState("center");

  return (
    <Wrapper>
      <div>
        <button onClick={() => setJustifyContent("flex-end")}>
          justifyContent: flex-end
        </button>
      </div>
      <div>
        <button onClick={() => setFlexDirection("row")}>
          flexDirection: row
        </button>
        <button onClick={() => setFlexDirection("row-reverse")}>
          flexDirection: row-reverse
        </button>
        <button onClick={() => setFlexDirection("column")}>
          flexDirection: column
        </button>
        <button onClick={() => setFlexDirection("column-reverse")}>
          flexDirection: column-reverse
        </button>
      </div>
      <p>
        Flex box flexDirection:{flexDirection}, justifyContent{justifyContent}
      </p>
      <Container flexDirection={flexDirection} justifyContent={justifyContent}>
        <Item>A</Item>
        <Item>B</Item>
        <Item>C</Item>
        <Item>D</Item>
        <Item>E</Item>
      </Container>
    </Wrapper>
  );
};

export const FlexBox: FC = () => (
  <>
    <C1 />
  </>
);
