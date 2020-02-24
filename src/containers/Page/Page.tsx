import React, { FC } from "react";
import { Content } from "./contents/Content";
import { Header } from "./contents/Header";
import { Article } from "./contents/Article";
import { Section } from "./contents/Section";
import { Aside } from "./contents/Aside";
import { Footer } from "./contents/Footer";
import { useProgress } from "~/hooks/useProgress";
import { Progress } from "~/components/atoms/Progress";

export const Page: FC = () => {
  return (
    <>
      <Header />
      <main>
        <Progress {...useProgress()} />
        <Content />
        <Article />
        <Section />
      </main>
      <Aside />
      <Footer />
    </>
  );
};
