import { lazy } from "react";

export const Demo20 = lazy(async () => {
  const { Router5Demo20 } = await import("~/components/ecosystems/Router5Demo");
  return { default: Router5Demo20 };
});
