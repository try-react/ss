import React, { StrictMode, Suspense } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "~/container/Style";
import { ErrorBoundary } from "~/container/ErrorBoundary";
import { RouterProvider } from "react-router5";
import { router } from "~/service/route";
import { theme } from "~/service/theme";
import { Page } from "~/container/Page";

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
