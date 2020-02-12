import { P1 } from "~/components/Environments/P1";
import { P2 } from "~/components/Environments/P2";
import { Lazy } from "~/components/Environments/Lazy";
import { Top } from "~/components/Environments/Top";

const top = {
  component: Top,
  name: "top",
  url: "/",
};

const p1 = {
  component: P1,
  name: "p1",
  url: "/p1",
};

const p2 = {
  component: P2,
  name: "p2",
  url: "/p2",
};

const lazy = {
  component: Lazy,
  name: "lazy",
  url: "/lazy",
};

export const routes = [p1, lazy, top, p2];
