import { lazy } from "react";

export const Demo1 = lazy(async () => {
  const { Router5Demo1 } = await import("~/components/ecosystems/Router5Demo");
  return { default: Router5Demo1 };
});
