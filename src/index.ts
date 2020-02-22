import React from "react";
import { App } from "~/container/App";
import { render } from "react-dom";
import { router } from "~/service/route";
import { progressService } from "~/state";

const init = () => {
  progressService.start();
  router.start();
};

const findTarget = (name: string) => document.getElementById(name);

init();
render(React.createElement(App), findTarget("root"));
