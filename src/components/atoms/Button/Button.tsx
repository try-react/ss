import React, { FC, Suspense } from "react";
import styled from "styled-components";

const StyledButton = styled.a`
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

type ButtonDomProps = {
  txt: string;
  id: number;
  setX: (p: { id: number }) => void;
};

const ButtonDom: FC<ButtonDomProps> = ({ id, setX, txt }) => (
  <>
    <ul>
      <li>{id}</li>
      <li>{txt}</li>
    </ul>
    <StyledButton onClick={() => setX({ id: 100 })}>update</StyledButton>
  </>
);

const SubstituteButton: FC = ({ children }) => (
  <Suspense fallback={<div>~[初期値取得中]~</div>}>{children}</Suspense>
);

type Props = { useButton: () => ButtonDomProps };
export const Button: FC<Props> = ({ useButton }) => {
  const ButtonComponent = () => <ButtonDom {...useButton()} />;

  return (
    <SubstituteButton>
      <ButtonComponent />
    </SubstituteButton>
  );
};
