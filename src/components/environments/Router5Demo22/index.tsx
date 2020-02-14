import { lazy } from "react";

export const Demo22 = lazy(async () => {
  const { Router5Demo22 } = await import("~/components/ecosystems/Router5Demo");
  return { default: Router5Demo22 };
});
