import React, { FC } from "react";
import styled from "styled-components";

type Props = {};

export const Button: FC<Props> = ({ children }) => (
  <>
    <ul>
      <li>a</li>
      <li>b</li>
      <li>c</li>
    </ul>
    <button type="button">{children}</button>
  </>
);

export const XButton = styled.a`
  background: transparent;
  border: 2px solid white;
  border-radius: 3px;
  color: red;
  display: inline-block;
  margin: 0.5rem 1rem;
  padding: 0.5rem 0;
  width: 11rem;
`;
