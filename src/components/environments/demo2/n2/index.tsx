import { lazy } from "react";
import { HOC } from "~/containers/HOC";
import { router } from "~/route";

export const Demo22 = lazy(() =>
  import("~/components/ecosystems/Router5Demo").then(({ Router5Demo22 }) =>
    HOC(Router5Demo22, {}),
  ),
);

export const setDemo22InitProps = async () => {
  const data = await (
    await import("~/util/misc").then(({ lazyFetch }) => lazyFetch)
  )();
  router.setDependencies({ data });
};
