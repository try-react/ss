import React, { FC } from "react";

type Props = {
  onClick: () => void;
};

export const SimpleButton: FC<Props> = ({ onClick }) => (
  <button type="button" onClick={onClick}>
    クリック me
  </button>
);
