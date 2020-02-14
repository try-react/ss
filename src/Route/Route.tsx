import React, { FC } from "react";
import { useRoute } from "react-router5";
import { startsWithSegment } from "router5-helpers";

import { P1 } from "~/components/Environments/P1";
import { P2 } from "~/components/Environments/P2";
import { Lazy } from "~/components/Environments/Lazy";
import {
  Router5Demo1,
  Router5Demo20,
  Router5Demo21,
  Router5Demo22,
} from "~/components/Environments/Router5Demo";

export const Route: FC = () => {
  const { route } = useRoute();
  if (!route) return <>404</>;

  const { name } = route;
  const match = startsWithSegment(name);

  if (match("p1")) return <P1 />;
  if (match("p2")) return <P2 />;
  if (match("lazy")) return <Lazy />;
  if (match("demo1")) return <Router5Demo1 />;
  if (match("demo2")) return <Router5Demo20 />;
  if (match("demo2.n1")) return <Router5Demo21 />;
  if (match("demo2.n2")) return <Router5Demo22 />;

  return <>???</>;
};
