import { Button, XButton } from "~/components/Atoms/Button";
import { GlobalStyle } from "~/x/GlobalStyle";
import React, { FC, StrictMode } from "react";
import { DefaultTheme, ThemeProvider } from "styled-components";

const theme: DefaultTheme = {
  colors: {
    main: "palevioletred",
    secondary: "green",
  },
};

export const App: FC = () => (
  <>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <StrictMode>
        <Button>Button</Button>
        <XButton>XButton</XButton>
      </StrictMode>
    </ThemeProvider>
  </>
);
