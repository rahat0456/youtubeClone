import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Auth from "./context/Auth.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Search from "./components/Search.jsx";
import PlayVideo from "./components/PlayVideo.jsx";
import Home from "./components/Home.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/search/:searchQuery", element: <Search /> },
      { path: "/video/:id", element: <PlayVideo /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Auth>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </Auth>
);
