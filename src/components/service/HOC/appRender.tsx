import React from "react";
import { render } from "react-dom";
import { App } from "~/components/service";

export const appRender = (target: HTMLElement | null) =>
  render(<App />, target);
