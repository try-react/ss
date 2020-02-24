import React, { FC } from "react";
import { useRoute, Link } from "react-router5";
import { routes } from "~/route";

export const ContentList: FC = () => {
  const { router } = useRoute();

  return (
    <ul>
      {routes.map((route) => (
        <li key={route.name}>
          <Link
            router={router}
            routeName={route.name}
            routeParams={{ id: 123 }} // 面倒なので全部に付与
          >
            {route.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};
