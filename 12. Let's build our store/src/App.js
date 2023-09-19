import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import Header from "./components/Header";
import Body from "./components/Body";
import Contact from "./components/Contact";
import NotFound from "./components/NotFound";
import RestaurantMenu from "./components/RestaurantMenu";
import Cart from "./components/Cart";
import UserContext from "./utils/UserContext";
import { appStore } from "./redux-store/appStore";

const About = lazy(() => import("./components/About"));
const Grocery = lazy(() => import("./components/Grocery"));

const AppLayout = () => {
  const [user, setUser] = useState({});

  useEffect(() => {
    // <code for authenticating a user and getting its
    // credentials
    setUser({ name: "Varinder Singh" });
  }, []);

  return (
    <Provider store={appStore}>
      <UserContext.Provider
        value={{
          user,
          updateUserContext: setUser,
        }}
      >
        <div className="app">
          <Header />
          <Outlet />
        </div>
      </UserContext.Provider>
    </Provider>
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
            <About />
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
      {
        path: "cart",
        element: <Cart />,
      },
    ],
    errorElement: <NotFound />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
