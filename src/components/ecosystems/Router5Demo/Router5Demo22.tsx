import React, { FC } from "react";

type Props = {
  data: {
    id: number;
  };
};
export const Router5Demo22: FC<Props> = ({ data }) => {
  return <>Router5Demo22 id: {data.id} </>;
};
