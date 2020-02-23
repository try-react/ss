import React, { StrictMode, Suspense } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "~/containers/Style";
import { ErrorBoundary } from "~/containers/ErrorBoundary";
import { RouterProvider } from "react-router5";
import { router } from "~/service/route";
import { theme } from "~/service/theme";
import { Page } from "~/containers/Page";

export class App extends React.PureComponent {
  render() {
    return (
      <StrictMode>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <RouterProvider router={router}>
            <Suspense fallback={null}>
              <ErrorBoundary>
                <Page />
              </ErrorBoundary>
            </Suspense>
          </RouterProvider>
        </ThemeProvider>
      </StrictMode>
    );
  }
}
