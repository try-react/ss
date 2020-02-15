const getId = () => ({ id: Math.round(Math.random() * 100) });
export const lazyFetch = () =>
  new Promise<{ id: number }>((resolve) =>
    setTimeout(() => resolve(getId()), 3000),
  );
