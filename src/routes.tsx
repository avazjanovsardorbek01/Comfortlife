import { Suspense, lazy } from "react";
import { RouteObject } from "react-router-dom";
import LoadingPage from "./components/loading";

const LazyMainPage = lazy(() => import("./pages/main"));
const LazyAboutPage = lazy(() => import("./pages/about"));
const LazyPropertiesPage = lazy(() => import("./pages/properties"));
const LazyPropertyPage = lazy(() => import("./pages/property"));
const LazyErrorPage = lazy(() => import("./pages/error"));
const LazyContactPage = lazy(() => import("./pages/contact"));
const routes: RouteObject[] = [
  {
    path: "/",
    element: (
      <Suspense fallback={<LoadingPage />}>
        <LazyMainPage />
      </Suspense>
    ),
  },
  {
    path: "/about",
    element: (
      <Suspense fallback={<LoadingPage />}>
        <LazyAboutPage />
      </Suspense>
    ),
  },
  {
    path: "/contact",
    element: (
      <Suspense fallback={<LoadingPage />}>
        <LazyContactPage />
      </Suspense>
    ),
  },
  {
    path: "/properties",
    element: (
      <Suspense fallback={<LoadingPage />}>
        <LazyPropertiesPage />
      </Suspense>
    ),
  },
  {
    path: "/property/:id",
    element: (
      <Suspense fallback={<LoadingPage />}>
        <LazyPropertyPage />
      </Suspense>
    ),
  },
  {
    path: "*",
    element: (
      <Suspense>
        <LazyErrorPage />
      </Suspense>
    ),
  },
];

export default routes;
