import React, { FC } from "react";
import { useRoute } from "react-router5";
import { P1 } from "~/components/environments/p1";
import { P2 } from "~/components/environments/p2";
import { Some } from "~/components/environments/some";
import { Demo10 } from "~/components/environments/demo1";
import { Demo11X } from "~/components/environments/demo1/_id";
import { Demo20 } from "~/components/environments/demo2";
import { Demo21 } from "~/components/environments/demo2/n1";
// import { Demo22 } from "~/components/environments/demo2/n2"; // 遷移前に作る
import { Top } from "~/components/environments/top";

type P = {
  _meta?: {
    Component?: () => JSX.Element;
  };
};

const findComponent = (p: P) => p?._meta?.Component;

export const Route: FC = () => {
  const { route } = useRoute();
  if (!route) return <></>;

  const Component = findComponent(route as P);
  if (Component) {
    return <Component />;
  }

  if (route.name === "top") return <Top />;
  if (route.name === "p1") return <P1 />;
  if (route.name === "p2") return <P2 />;
  if (route.name === "some") return <Some />; // Suspense
  if (route.name === "demo1.id") return <Demo11X />; // demo/:id
  if (route.name === "demo1") return <Demo10 />;
  if (route.name === "demo2.n1") return <Demo21 />;
  // if (route.name === "demo2.n2") return <Demo22 />; // 遷移前に作る
  if (route.name === "demo2") return <Demo20 />;

  return <>???</>;
};
