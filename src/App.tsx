import React, { StrictMode, Suspense, FC } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle, theme } from "~/components/Style";
import { RouterProvider } from "react-router5";
import { Route, router } from "~/Route";

export const App: FC = () => (
  <StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <RouterProvider router={router}>
        <Suspense fallback={<div>Please wait...</div>}>
          <Route />
        </Suspense>
      </RouterProvider>
    </ThemeProvider>
  </StrictMode>
);
