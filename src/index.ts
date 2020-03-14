import React from "react";
import { App } from "~/containers/App";
import { render } from "react-dom";
import { router } from "~/state/route";
import { progressService } from "~/state/progress";

const init = () => {
  progressService.start();
  router.start();
};

export const stop = () => {
  progressService.stop();
  router.stop();
  history.pushState([], "", "");
};

const findTarget = (name: string) => document.getElementById(name);

init();
render(React.createElement(App), findTarget("root"));
