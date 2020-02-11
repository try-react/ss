import { GlobalStyle } from "~/x/GlobalStyle";
import React, { FC, StrictMode, lazy, Suspense } from "react";
import { DefaultTheme, ThemeProvider } from "styled-components";
import { HOC } from "~/util/HOC";

const theme: DefaultTheme = {
  colors: {
    main: "palevioletred",
    secondary: "green",
  },
};

const Xxx = lazy(() =>
  import("~/components/Atoms/Button").then((m) => ({
    default: HOC(m.Button, { txt: "abc" }),
  })),
);

export const App: FC = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <StrictMode>
      <Suspense fallback={<div>Please wait...</div>}>
        <Xxx />
      </Suspense>
    </StrictMode>
  </ThemeProvider>
);
