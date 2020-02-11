import { GlobalStyle } from "~/x/GlobalStyle";
import React, { FC, StrictMode, Suspense } from "react";
import { DefaultTheme, ThemeProvider } from "styled-components";
import { ComponentFactory, lazyFetch } from "~/util";

// // どこかに移動？
const LazyButton = React.lazy(async () => {
  await lazyFetch();
  const { Button } = await import("./components/Atoms/Button/Button");
  const props = { txt: "oo" };
  return { default: ComponentFactory(Button, props) };
});

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
        <Suspense fallback={<div>Loading...</div>}>
          <LazyButton />
        </Suspense>
      </StrictMode>
    </ThemeProvider>
  </>
);
