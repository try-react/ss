import { lazy } from "react";

export const Demo10 = lazy(async () => {
  const { Router5Demo10 } = await import("~/components/ecosystems/Router5Demo");
  return { default: Router5Demo10 };
});
