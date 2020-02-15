import { lazy } from "react";

export const P2 = lazy(async () => {
  const { Page } = await import("~/components/ecosystems/Page");
  return { default: Page };
});
