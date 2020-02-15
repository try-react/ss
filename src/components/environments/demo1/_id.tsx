import { lazy } from "react";

export const Demo11X = lazy(async () => {
  const { Router5Demo11X } = await import(
    "~/components/ecosystems/Router5Demo"
  );
  return { default: Router5Demo11X };
});
