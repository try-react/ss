import React, { FC } from "react";
import { useRouter } from "react-router5";

type Data = {
  data: {
    id: number;
  };
};

export const Router5Demo22: FC = () => {
  const { getDependencies } = useRouter();
  const { data } = getDependencies();

  return <>Router5Demo22 id: {data.id} </>;
};
