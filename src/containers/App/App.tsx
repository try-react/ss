import React, { StrictMode, Suspense } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "~/containers/Style";
import { ErrorBoundary } from "~/containers/ErrorBoundary";
import { RouterProvider } from "react-router5";
import { router } from "~/state/route";
import { theme } from "~/theme";
import { Page } from "~/containers/Page";
import { ProgressBar } from "~/components/ecosystems/Loading";

export class App extends React.PureComponent {
  render() {
    return (
      <StrictMode>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <ErrorBoundary>
            <RouterProvider router={router}>
              <Suspense fallback="App準備中">
                <ProgressBar />
                <Page />
              </Suspense>
            </RouterProvider>
          </ErrorBoundary>
        </ThemeProvider>
      </StrictMode>
    );
  }
}
