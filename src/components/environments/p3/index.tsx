import React, { FC } from "react";
import styled from "styled-components";

const txt =
  "あのイーハトーヴォのすきとおった風、夏でも底に冷たさをもつ青いそら、うつくしい森で飾られたモリーオ市、郊外のぎらぎらひかる草の波。";

const StyledP3 = styled.p`
  /* 適切な文字サイズ 14px ~ 18px */
  font-size: 16px;
`;

const StyledP4 = styled.p`
  font-family: Lacquer, sans-serif;
  font-size: 16px;
`;

const StyledP5 = styled.p`
  font-weight: bold;
`;

const StyledP6 = styled.p`
  font-weight: lighter;
`;

const StyledSpan = styled.span`
  /* 適切な行の高さ 1.5 ~ 1.9 フォントサイズと連動するため単位 無し */
  line-height: 1.6;
`;

const StyledDiv1 = styled.div`
  margin: 50px;

  /* 文字の折返し */
  overflow-wrap: break-word;
  width: 300px;
`;

export const P3: FC = () => (
  <>
    <StyledP3>Text ABC 123</StyledP3>
    <StyledP4>Text ABC 123 Lacquer Lacquer</StyledP4>
    <StyledP5>Text ABC 123</StyledP5>
    <StyledP6>Text ABC 123</StyledP6>
    <StyledDiv1>
      <StyledSpan>{txt}</StyledSpan>
    </StyledDiv1>
  </>
);
