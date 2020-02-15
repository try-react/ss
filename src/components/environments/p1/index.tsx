import { lazy } from "react";

export const P1 = lazy(async () => {
  const { Form } = await import("~/components/ecosystems/Form");
  return { default: Form };
});
