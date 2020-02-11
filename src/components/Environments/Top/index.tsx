import React, { FC } from "react";
import { UISrefActive, UISref } from "@uirouter/react";
import { routes } from "~/router/routes";

export const Top: FC = () => {
  return (
    <ul>
      {routes.map((route) => (
        <UISrefActive class="active" key={route.name}>
          <UISref to={route.name} key={route.name}>
            <li>
              <a>{route.name}</a>
            </li>
          </UISref>
        </UISrefActive>
      ))}
    </ul>
  );
};
