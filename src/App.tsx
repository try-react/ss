import React, { StrictMode, Suspense, FC } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle, theme } from "~/components/Style";
import { UIRouter, UIView, pushStateLocationPlugin } from "@uirouter/react";
import { routes } from "./router/routes";

export const App: FC = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Suspense fallback={<div>Please wait...</div>}>
      <UIRouter plugins={[pushStateLocationPlugin]} states={routes}>
        <StrictMode>
          <UIView />
        </StrictMode>
      </UIRouter>
    </Suspense>
  </ThemeProvider>
);
