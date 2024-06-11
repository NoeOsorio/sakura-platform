import React from "react";
import { createBrowserRouter } from "react-router-dom";
import PrivateRoute from "./hooks/PrivateRoute";
import { Footer, Navbar } from "./components";
import { Home, Login } from "./screens";

const Layout = ({ children }) => {
  return (
    <PrivateRoute>
      <Navbar />
      {children}
      <Footer />
    </PrivateRoute>
  );
};

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <Home />
      </Layout>
    ),
  },
  { path: "login", element: <Login /> },
]);
