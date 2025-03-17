import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import GuestLayout from "./layouts/Guest/guestLayout.jsx";
import Home from "./routes/Home/home.jsx";
import AppLayout from "./layouts/App/appLayout.jsx";
import Dashboard from "./routes/Dashboard/dashboard.jsx";
import Chat from "./routes/Chat/chat.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./routes/Auth/login.jsx";
import Register from "./routes/Register/register.jsx";

const router = createBrowserRouter([
  {
    element: <GuestLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      { 
        path: "/login", 
        element: <Login /> 
      },
      { 
        path: "/register", 
        element: <Register /> 
      },
      {
        element: <AppLayout />,
        children: [
          {
            path: "/dashboard",
            element: <Dashboard />,
          },
          {
            path: "/dashboard/chats/:id",
            element: <Chat />,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
