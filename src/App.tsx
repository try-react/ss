import React, { FC, Suspense } from "react";
import { RoutesComponent } from "~/router/RoutesComponent";

export const App: FC = () => {
  return (
    <Suspense fallback={<div>Please wait...</div>}>
      <RoutesComponent />
    </Suspense>
  );
};
