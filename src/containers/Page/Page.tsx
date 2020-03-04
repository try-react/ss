import React, { FC } from "react";
import { Content } from "./contents/Content";
import { Header } from "./contents/Header";
import { Article } from "./contents/Article";
import { Section } from "./contents/Section";
import { Aside } from "./contents/Aside";
import { Footer } from "./contents/Footer";

export const Page: FC = () => (
  <>
    <Header />
    <main>
      <Content />
      <Article />
      <Section />
    </main>
    <Aside />
    <Footer />
  </>
);
