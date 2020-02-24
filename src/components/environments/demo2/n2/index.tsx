import { lazy } from "react";
import { HOC } from "~/containers/HOC";

export const Demo22 = lazy(() =>
  import("~/components/ecosystems/Router5Demo").then(({ Router5Demo22 }) =>
    HOC(Router5Demo22, {}),
  ),
);

export const getDemo22InitProps = async () =>
  (await import("~/util/misc").then(({ lazyFetch }) => lazyFetch))();
