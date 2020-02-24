import { lazy } from "react";
import { HOC } from "~/containers/HOC";
import { router } from "~/route";

export const createPage = async () => {
  const data = await (
    await import("~/util/misc").then(({ lazyFetch }) => lazyFetch)
  )();

  const Component = lazy(() =>
    import("~/components/ecosystems/Router5Demo").then(({ Router5Demo22 }) =>
      HOC(Router5Demo22, { data }),
    ),
  );

  router.setDependencies({ Content: Component });
};
