import React, { FC } from "react";
import { useRoute } from "react-router5";

type _Meta = {
  _meta: {
    data: {
      id: number;
    };
  };
};

export const Router5Demo22: FC = () => {
  const { route } = useRoute();
  const { data } = ((route as unknown) as _Meta)._meta;

  return <>Router5Demo22 id: {data.id}</>;
};
