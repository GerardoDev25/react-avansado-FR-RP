import { LazyExoticComponent, lazy } from 'react';
import { Nolazy } from '../01-lazyload/pages/NoLazy';

type JSXComponent = () => JSX.Element;

export interface Route {
  to: string;
  path: string;
  Component: LazyExoticComponent<JSXComponent> | JSXComponent;
  name: string;
}

export const LazyLoad = lazy(
  () =>
    import(/* webpackChunkName: "myChunk" */ '../01-lazyload/layout/LazyLayout')
);

export const routes: Route[] = [
  {
    path: '/lazyload/*',
    to: '/lazyload/',
    Component: LazyLoad,
    name: 'Lazy Load - Dash',
  },
  {
    to: '/no-lazy',
    path: 'no-lazy',
    Component: Nolazy,
    name: 'No Lazy',
  },
];
