import React, { FC } from "react";
import styled, { css } from "styled-components";

const src =
  "https://avatars1.githubusercontent.com/u/16768208?s=460&u=7294a0f3c98ba9122d8e8ed410fa3f9602a80f4a&v=4";

const Ul = styled.ul`
  display: grid;
  gap: 10px;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1.5rem;
`;

const Li = styled.li`
  background: #0bd;
  color: #fff;
`;

const Nav: FC = () => (
  <nav>
    <Ul>
      <Li>News</Li>
      <Li>Menu</Li>
      <Li>Contact</Li>
    </Ul>
  </nav>
);

const wrapperStyle = css`
  margin: 0 auto;
  max-width: 1100px;
  padding: 0 4 %;
`;

const Header: FC = styled.header`
  /* 中身が横並びになる */
  display: flex;

  /* display: flexと組み合わせて使う 等間隔になったり */
  justify-content: space-between;
  ${wrapperStyle}
`;

const Main: FC = styled.header`
  ${wrapperStyle}
`;

export const FullScreen: FC = () => (
  <>
    <Header>
      <h1>
        <img src={src} alt="ロゴ" style={{ marginTop: 14, width: 210 }} />
      </h1>
      <Nav />
    </Header>

    <Main>
      <h2>かふぇでーす</h2>
      <p>おしゃれな飲み物あるよー</p>
    </Main>
  </>
);
