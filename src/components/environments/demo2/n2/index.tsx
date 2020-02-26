import { lazy } from "react";
import { HOC } from "~/containers/HOC";
import { lazyFetch } from "~/util/misc";

export const create = async () => {
  const data = await lazyFetch();

  return lazy(() =>
    import("~/components/ecosystems/Router5Demo").then(({ Router5Demo22 }) =>
      HOC(Router5Demo22, { data }),
    ),
  );
};
