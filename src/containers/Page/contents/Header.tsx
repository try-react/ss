import React, { FC } from "react";
import { useProgress } from "~/hooks/useProgress";
import { Progress } from "~/components/atoms/Progress";

export const Header: FC = () => <Progress {...useProgress()} />;
