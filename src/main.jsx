import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Root } from "./Template/Root";
import Start from "./Pages/Start";
import "./Style.scss";

import "./Tools/i18n"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Start />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      }}
      router={router}
    />
  </StrictMode>
);
