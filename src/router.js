import React from "react";
import { createBrowserRouter } from "react-router-dom";
import PrivateRoute from "./hooks/PrivateRoute";
import { Footer, Navbar } from "./components";
import { CursoDetail, Cursos, Home, Login, Profile } from "./screens";

const Layout = ({ children }) => {
  return (
    <PrivateRoute>
      <div className="root">
        <Navbar />
        {<main>{children}</main>}
        <Footer />
      </div>
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
  {
    path: "/profile",
    element: (
      <Layout>
        <Profile />
      </Layout>
    ),
  },
  {
    path: "/cursos",
    element: (
      <Layout>
        <Cursos />
      </Layout>
    ),
  },
  {
    path: "/cursos/:name",
    element: (
      <Layout>
        <CursoDetail />
      </Layout>
    ),
  },
  { path: "login", element: <Login /> },
]);
