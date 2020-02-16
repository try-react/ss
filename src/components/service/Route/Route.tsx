import React, { FC } from "react";
import { useRoute } from "react-router5";
import { startsWithSegment } from "router5-helpers";
import { P1 } from "~/components/environments/p1";
import { P2 } from "~/components/environments/p2";
import { Some } from "~/components/environments/some";
import { Demo10 } from "~/components/environments/demo1";
import { Demo11X } from "~/components/environments/demo1/_id";
import { Demo20 } from "~/components/environments/demo2";
import { Demo21 } from "~/components/environments/demo2/n1";
import { Demo22 } from "~/components/environments/demo2/n2";
import { Top } from "~/components/environments/top";

export const Route: FC = () => {
  const { route } = useRoute();
  if (!route) return <></>;

  const match = startsWithSegment(route.name);

  if (match("top")) return <Top />;
  if (match("p1")) return <P1 />;
  if (match("p2")) return <P2 />;
  if (match("some")) return <Some />; // Suspense
  if (match("demo1.id")) return <Demo11X />; // demo/:id
  if (match("demo1")) return <Demo10 />;
  if (match("demo2.n1")) return <Demo21 />;
  if (match("demo2.n2")) return <Demo22 />;
  if (match("demo2")) return <Demo20 />;

  return <>???</>;
};
