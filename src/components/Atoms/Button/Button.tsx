import React, { FC } from "react";
// import styled from "styled-components";

type Props = {
  txt: string;
};

export const Button: FC<Props> = ({ txt, children }) => {
  return (
    <>
      <button type="button">
        {children}-{txt}
      </button>
    </>
  );
};

// export const XButton = styled.a`
//   background: transparent;
//   border: 2px solid white;
//   border-radius: 3px;
//   color: red;
//   display: inline-block;
//   margin: 0.5rem 1rem;
//   padding: 0.5rem 0;
//   width: 11rem;
// `;
// export default Button;
