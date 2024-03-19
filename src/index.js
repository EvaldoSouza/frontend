import React from "react";
import ErrorPage from "./error-page";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Inicial from "./pages/inicial";
import CriarCartao from "./pages/criarCartao";
import RealizarTeste from "./pages/realizarTeste";
import CriarTeste from "./pages/criarTeste";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Inicial />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/criarCartao",
    element: <CriarCartao />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/criarTeste",
    element: <CriarTeste />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/realizarTeste",
    element: <RealizarTeste />,
    errorElement: <ErrorPage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
