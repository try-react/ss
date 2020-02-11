import React, { FC } from "react";
import { Link } from "react-router5";
import { routes } from "~/router/routes";

export const Top: FC = () => (
  <ul>
    {routes.map((route) => (
      <li key={route.name}>
        <Link routeName={route.name}>
          {route.name}-{route.path}
        </Link>
      </li>
    ))}
  </ul>
);
