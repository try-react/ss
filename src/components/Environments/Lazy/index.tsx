import { lazy } from "react";
import { HOC } from "~/util/HOC";
import { lazyFetch } from "~/util/misc";

export const Lazy = lazy(async () => {
  await lazyFetch();
  return import("~/components/Atoms/Button").then(({ Button }) => ({
    default: HOC(Button, { txt: "abc" }),
  }));
});
