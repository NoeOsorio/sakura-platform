import React from "react";
import { createBrowserRouter, Outlet } from "react-router-dom";
import PrivateRoute from "./hooks/PrivateRoute";
import { Footer } from "./components";
import { Home, Login } from "./screens";
import { AuthProvider } from "./hooks/AuthContext";

const Layout = () => {
  return (
    <AuthProvider>
      <Outlet />
      <Footer />
    </AuthProvider>
  );
};

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "login", element: <Login /> },
      {
        path: "",
        element: <PrivateRoute />,
        children: [{ path: "", element: <Home /> }],
      },
    ],
  },
]);
