import React, { FC } from "react";
import { BaseLink, useRoute } from "react-router5";

export const Top: FC = () => {
  const { router } = useRoute();

  return (
    <>
      <ul>
        <li>
          <BaseLink router={router} routeName="top">
            top
          </BaseLink>
        </li>
        <li>
          <BaseLink router={router} routeName="p1">
            p1
          </BaseLink>
        </li>
        <li>
          <BaseLink router={router} routeName="p2">
            p2
          </BaseLink>
        </li>
        <li>
          <BaseLink router={router} routeName="p3">
            p3
          </BaseLink>
        </li>
        <li>
          <BaseLink router={router} routeName="p4">
            p4
          </BaseLink>
        </li>
        <li>
          <BaseLink router={router} routeName="p5">
            p5 FlexBox
          </BaseLink>
        </li>
        <li>
          <BaseLink router={router} routeName="p6">
            p6
          </BaseLink>
        </li>
        <li>
          <BaseLink router={router} routeName="p7">
            p7
          </BaseLink>
        </li>
        <li>
          <BaseLink router={router} routeName="some">
            some
          </BaseLink>
        </li>

        <li>
          <BaseLink router={router} routeName="demo1">
            demo1
          </BaseLink>
        </li>
        <li>
          <BaseLink
            router={router}
            routeName="demo1.id"
            routeParams={{ id: 123 }}
          >
            demo1/123
          </BaseLink>
        </li>

        <li>
          <BaseLink router={router} routeName="demo2">
            demo2
          </BaseLink>
        </li>
        <li>
          <BaseLink router={router} routeName="demo2.n1">
            demo2.n1
          </BaseLink>
        </li>
        <li>
          <BaseLink router={router} routeName="demo2.n2">
            demo2.n2
          </BaseLink>
        </li>
      </ul>
    </>
  );
};
