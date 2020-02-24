import React, { FC } from "react";
import { Main } from "./contents/Main";
import { Header } from "./contents/Header";

export const Page: FC = () => (
  <>
    <header>
      <Header />
    </header>
    <main>
      <Main />
    </main>
    <aside />
    <footer />
  </>
);
