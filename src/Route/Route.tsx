import React, { FC } from "react";
import { useRoute } from "react-router5";
import { startsWithSegment } from "router5-helpers";
import { P1 } from "~/components/environments/P1";
import { P2 } from "~/components/environments/P2";
import { Lazy } from "~/components/environments/Lazy";
import { Demo1 } from "~/components/environments/Router5Demo1";
import { Demo20 } from "~/components/environments/Router5Demo20";
import { Demo21 } from "~/components/environments/Router5Demo21";
import { Demo22 } from "~/components/environments/Router5Demo22";

export const Route: FC = () => {
  const { route } = useRoute();
  console.log(route);
  if (!route) return <>404</>;

  const { name } = route;
  const match = startsWithSegment(name);

  if (match("p1")) return <P1 />;
  if (match("p2")) return <P2 />;
  if (match("lazy")) return <Lazy />;
  if (match("demo1")) return <Demo1 />;
  if (match("demo2")) return <Demo20 />;
  if (match("demo2.n1")) return <Demo21 />;
  if (match("demo2.n2")) return <Demo22 />;

  return <>???</>;
};
