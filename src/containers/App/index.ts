export * from "./App";

interface Response {
  json<P = T>(): Promise<P>;
}

const my = () => fetch("user");
