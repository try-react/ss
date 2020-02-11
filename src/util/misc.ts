export const lazyFetch = () =>
  new Promise((resolve) => setTimeout(resolve, 2000));
