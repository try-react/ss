import React, { FC } from "react";
import { Route } from "~/container/Route";
import { Progress } from "~/components/atoms/Progress";
import { useProgress } from "~/hook/useProgress";

export const Page: FC = () => (
  <>
    <Progress {...useProgress()} />
    <Route />
  </>
);
