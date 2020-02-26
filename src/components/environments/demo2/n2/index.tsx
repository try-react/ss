import React, { FC } from "react";
import { Router5Demo22 } from "~/components/ecosystems/Router5Demo";

type Props = Parameters<typeof Router5Demo22>[0];

export const Component: FC<Props> = (props) => <Router5Demo22 {...props} />;
