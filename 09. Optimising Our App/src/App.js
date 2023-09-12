import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";

import Header from "./components/Header";
import Body from "./components/Body";
import Contact from "./components/Contact";
import NotFound from "./components/NotFound";
import RestaurantMenu from "./components/RestaurantMenu";

const About = lazy(() => import("./components/About"));
const Grocery = lazy(() => import("./components/Grocery"));

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<h3>Lazy Loading About component</h3>}>
            <About />,
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "restaurants/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "grocery",
        element: (
          <Suspense fallback={<h3>Lazy Loading Grocery component</h3>}>
            <Grocery />,
          </Suspense>
        ),
      },
    ],
    errorElement: <NotFound />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
