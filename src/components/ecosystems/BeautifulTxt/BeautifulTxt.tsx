import React, { FC } from "react";
import styled from "styled-components";

const txt =
  "あのイーハトーヴォのすきとおった風、夏でも底に冷たさをもつ青いそら、うつくしい森で飾られたモリーオ市、郊外のぎらぎらひかる草の波。";

const txt2 = `
%
 親要素に対して

em
 親要素 フォントサイズ準拠

rem (root + em
 <html>タグのフォントサイズ基準

vm
 viewport width
 ブラウザの表示領域下記の様に指定すると 仮想のモニタが出来る
 <meta name="viewport" content="width=480">

vh
 viewport height
`;

const StyledP3 = styled.p`
  color: red;
`;

const StyledP4 = styled.p`
  font-size: 16px;
`;

const StyledP5 = styled.p`
  font-weight: bold;
`;

const StyledP6 = styled.p`
  font-weight: lighter;
`;

const BeautifulTxtBody = styled.span`
  font-family: sans-serif;

  /* 適切な文字サイズ 14px ~ 18px */
  font-size: 16px;
  font-weight: lighter;

  /* 適切な行の高さ 1.5 ~ 1.9 フォントサイズと連動するため単位 無し */
  line-height: 1.6;
`;

const BeautifulTxtBox = styled.div`
  background-color: lightblue;
  margin: 50px;

  /* 文字の折返し */
  overflow-wrap: break-word;
  width: 300px;
`;

const StyledDiv1 = styled.div`
  background: #0bd;
  height: 200px;
  margin: 20px;
  width: auto;
`;

const StyledDiv2 = styled.div`
  background: #0d1;
  height: 1.5rem;
  margin: 20px;
`;

const StyledDiv3 = styled.div`
  background: #0ac;
  height: 150px;
  margin: 20px;
  width: 500px;
`;

const StyledDiv4 = styled.div`
  background: #a0c;
  height: 50%;
  width: 50%;
`;

const C1: FC = () => (
  <>
    <StyledP3>Text ABC 123</StyledP3>
    <StyledP4>Text ABC 123 Lacquer Lacquer</StyledP4>
    <StyledP5>Text ABC 123</StyledP5>
    <StyledP6>Text ABC 123</StyledP6>
  </>
);

const C2: FC = () => (
  <>
    <BeautifulTxtBox>
      <BeautifulTxtBody>{txt}</BeautifulTxtBody>
    </BeautifulTxtBox>
  </>
);

const C3: FC = () => (
  <>
    <StyledDiv1>{txt}</StyledDiv1>
    <StyledDiv2>{txt}</StyledDiv2>
    <StyledDiv3>
      <StyledDiv4 />
    </StyledDiv3>
  </>
);

export const BeautifulTxt: FC = () => (
  <>
    <C1 />
    <C2 />
    <C3 />
    <pre>{txt2}</pre>
  </>
);
