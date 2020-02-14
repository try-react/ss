import { lazy } from "react";
import { HOC } from "~/util/HOC";
import { lazyFetch } from "~/util/misc";

export const Lazy = lazy(async () => {
  await lazyFetch();
  const { Button } = await import("~/components/Atoms/Button");
  return HOC(Button, { txt: "abc" });
});
