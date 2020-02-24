import React, { FC } from "react";
import { useRoute } from "react-router5";
import { router } from "~/route";
import { throwError } from "~/util/misc";

export const Content: FC = () => {
  if (!useRoute().route) return <>準備中✍️...</>;
  const C = router.getDependencies();
  return C.Content ? <C.Content /> : throwError("Contentが見つからない");
};
