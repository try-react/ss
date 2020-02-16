import React, { StrictMode, Suspense } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle, ErrorBoundary, Route } from "~/components/service";
import { RouterProvider } from "react-router5";
import { router } from "~/service/route";
import { theme } from "~/service/theme";

const Pro = () => <div>プログレスバー</div>;

export class App extends React.PureComponent {
  render() {
    return (
      <StrictMode>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <RouterProvider router={router}>
            <Pro />
            <Suspense fallback={null}>
              <ErrorBoundary>
                <Route />
              </ErrorBoundary>
            </Suspense>
          </RouterProvider>
        </ThemeProvider>
      </StrictMode>
    );
  }
}
