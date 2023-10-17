import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import './styles/global.css'

import {
  BrowserRouter,
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";

import GalleryPage from "./pages/gallery.jsx";
import NavBar from "./components/navbar.jsx";
import Footer from "./components/footer.jsx";
import ContactPage from "./pages/contact.jsx";
import AdminPage from "./pages/admin.jsx";



const Layout = () => {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
};

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/gallery",
        element: <GalleryPage />,
      },
      {
        path: "/contact",
        element: <ContactPage />,
      },
      {
        path: "/admin",
        element: <AdminPage />,
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
