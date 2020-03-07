import React, { FC } from "react";
import { Link } from "react-router5";
import { routes } from "~/state/route";

export const ContentList: FC = () => {
  return (
    <>
      <ul>
        {routes.map((route) => (
          <li key={route.name}>
            <Link
              router={routes}
              routeName={route.name}
              routeParams={{ id: 123 }} // 面倒なので全部に付与
            >
              {route.name}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};
