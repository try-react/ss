import React, { FC } from "react";
import { Route } from "~/components/service";
import { Progress } from "~/components/atoms/Progress";
import { useProgress } from "~/hooks/useProgress";

export const Page: FC = () => (
  <>
    <Progress {...useProgress()} />
    <Route />
  </>
);