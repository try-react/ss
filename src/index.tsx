import React, { StrictMode } from "react";
import { render } from "react-dom";
import { App } from "./App";
import { RouterProvider } from "react-router5";
import createRouter from "router5";
import browserPlugin from "router5-plugin-browser";
import { routes } from "~/router/routes";
import { ThemeProvider } from "styled-components";
import { GlobalStyle, theme } from "~/components/Style";

const router = createRouter(routes);
router.usePlugin(browserPlugin({ useHash: false }));
const target = document.getElementById("root");

const Main = () =>
  render(
    <StrictMode>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <RouterProvider router={router}>
          <App />
        </RouterProvider>
      </ThemeProvider>
    </StrictMode>,
    target,
  );

router.start(Main);
