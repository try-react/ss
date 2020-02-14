import React, { FC } from "react";

/**
 * 置くべきコンテンツ
 *
 * ロゴ画像
 * ページタイトル
 * ナビ
 */
const Header: FC = () => (
  <header>
    <h1>ページのタイトル</h1>
    <nav>
      <ul>
        <li>おすすめ</li>
        <li>料金</li>
        <li>問い合わせ</li>
      </ul>
    </nav>
  </header>
);

/**
 * 置くべきコンテンツ
 *
 * 記事
 * ココだけ独立してもOKな内容
 */
const Article = () => (
  <article>
    <h2>記事のタイトル</h2>
    <p>HTML CSS 便利だよ hoge fuga ...</p>
  </article>
);

/**
 * 置くべきコンテンツ
 *
 * <article/> と似ているが
 * ココだけ見ても完結しない ひとかたまりに一つのテーマがある
 */
const Section = () => (
  <section>
    <h2>HTMLの魅力一覧</h2>
    <ul>
      <li>あれ</li>
      <li>これ</li>
    </ul>
  </section>
);

const Main: FC = ({ children }) => <main>{children}</main>;

/**
 * 置くべきコンテンツ
 *
 * 本文とは関係無い
 */
const Aside = () => (
  <aside>
    <h3>アフェリエイト</h3>
    <ul>
      <li>are</li>
      <li>kore</li>
    </ul>
  </aside>
);

/**
 * 置くべきコンテンツ
 *
 * コピーライト
 */
const Footer = () => (
  <footer>
    <ul>
      <li>
        <a>Twitter</a>
      </li>
      <li>
        <a>Facebook</a>
      </li>
    </ul>
    <p>Copyright 20XX tommy</p>
  </footer>
);

/**
 * 置くべきコンテンツ
 *
 * 意味を持たないブロック
 */
const FooDiv = () => (
  <div>
    <img src="" alt="" />
  </div>
);

export const Page: FC = () => (
  <>
    <Header />
    <Main>
      <Article />
      <Section />
      <FooDiv />
    </Main>
    <Aside />
    <Footer />
  </>
);
