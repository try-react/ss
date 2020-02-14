import React, { FC } from "react";
import styled from "styled-components";

type Props = {
  txt: string;
};

const Button2 = styled.a`
  background: #668ad8; /* ボタン色 */
  border-bottom: solid 4px #627295;
  border-radius: 3px;
  color: #fff;
  display: inline-block;
  padding: 0.5em 1em;
  text-decoration: none;

  &:active {
    border-bottom: none; /* 線を消す */
    transform: translateY(4px); /* 下に動く */
  }
`;

export const Button: FC<Props> = ({ txt }) => (
  <>
    <ul>
      <li>a</li>
      <li>{txt}</li>
    </ul>
    <Button2>zz</Button2>
  </>
);
