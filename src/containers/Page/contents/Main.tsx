import React, { FC } from "react";
import { useRoute } from "react-router5";
import { P1 } from "~/components/environments/p1";
import { P2 } from "~/components/environments/p2";
import { P3 } from "~/components/environments/p3";
import { P4 } from "~/components/environments/p4";
import { P5 } from "~/components/environments/p5";
import { P6 } from "~/components/environments/p6";
import { Some } from "~/components/environments/some";
import { Demo10 } from "~/components/environments/demo1";
import { Demo11X } from "~/components/environments/demo1/_id";
import { Demo20 } from "~/components/environments/demo2";
import { Demo21 } from "~/components/environments/demo2/n1";
import { Demo22 } from "~/components/environments/demo2/n2";
import { Top } from "~/components/environments/top";

const throwError = () => {
  throw Error("🤬 危険が危ない 🤬");
};

export const Main: FC = () => {
  const { route } = useRoute();

  if (!route) return <>準備中✍️...</>;
  if (route.name === "top") return <Top />;
  if (route.name === "p1") return <P1 />;
  if (route.name === "p2") return <P2 />;
  if (route.name === "p3") return <P3 />;
  if (route.name === "p4") return <P4 />;
  if (route.name === "p5") return <P5 />;
  if (route.name === "p6") return <P6 />;
  if (route.name === "some") return <Some />; // Suspense
  if (route.name === "demo1.id") return <Demo11X />; // demo/:id
  if (route.name === "demo1") return <Demo10 />;
  if (route.name === "demo2.n1") return <Demo21 />;
  if (route.name === "demo2.n2") return <Demo22 />; // 遷移前に値取得
  if (route.name === "demo2") return <Demo20 />;
  return throwError();
};
