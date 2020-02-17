/**
 * !! かなり 実験的な処理なので 基本は無し
 *
 * 遷移前に Componentにデータ渡す
 *
 * ```tsx
 * const data = fetch()
 * <SomeComponent data={data} />
 *```
 *
 * routes.ts での設定
 *```ts
 *  _meta: {
 *    onActivate: () => lazyFetch(),
 *   loadComponent: SomeComponent,
 *  },
 *```
 */
import { routes } from "~/service/route";
import { Router } from "router5";
import { HOC } from "~/components/service/HOC";

type PreMakeComponent = Parameters<Router["useMiddleware"]>[0];

export const preMakeComponent: PreMakeComponent = () => async (toState) => {
  const fn = routes.find((p) => p.name === toState.name)?._meta?.onActivate;
  const _Component = routes.find((p) => p.name === toState.name)?._meta
    ?.loadComponent;

  if (!fn || !_Component) {
    return new Promise((r) => r({ ...toState }));
  }

  const Component = HOC(_Component, { ...toState, data: await fn() }).default;
  return new Promise((r) => r({ ...toState, _meta: { Component } }));
};
