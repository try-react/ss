import React, { FC } from "react";
import { Link } from "react-router5";

export const Router5Demo10: FC = () => {
  return (
    <div>
      <Link routeName="demo1.id" routeParams={{ id: 123 }}>
        demo1/123
      </Link>
    </div>
  );
};
