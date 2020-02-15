import { lazy } from "react";

export const Demo21 = lazy(async () => {
  const { Router5Demo21 } = await import("~/components/ecosystems/Router5Demo");
  return { default: Router5Demo21 };
});
