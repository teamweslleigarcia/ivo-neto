import * as React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";

import './index.css'
import './App.css'

import Navbar from './Components/Navbar'
import ErrorPage from './Routes/Pages/ErrorPage'
import PageHome from './Routes/Pages/Home'
import PageAbout from './Routes/Pages/About'
import PageValores from './Routes/Pages/Valores'
import PageProjetos from "./Routes/Pages/Projetos"
import PageGabiente from "./Routes/Pages/Gabinete"
import PageTrajetoria from "./Routes/Pages/Trajetoria"
import PageBlog from "./Routes/Pages/Blog"
import PageNoticias from "./Routes/Pages/Noticias"
import PageContact from './Routes/Pages/Contact'
import FeiraEmpreendedor from "./Routes/Pages/FeiraEmpreendedor"
import MinhaRua from "./Routes/Pages/MinhaRua"
import SonhoPrincesa from "./Routes/Pages/SonhoPrincesa"
import ProjetosApoio from './Routes/Pages/ProjetosApoio'
import Footer from "./Components/Footer";

const AppLayout = () =>{
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <PageHome />,
      },
      {
        path: "about",
        element: <PageAbout />,
      },
      {
        path: "valores",
        element: <PageValores />,
      },
      {
        path: "projetos",
        element: <PageProjetos />,
      },
      {
        path: "gabinete",
        element: <PageGabiente />,
      },
      {
        path: "trajetoria",
        element: <PageTrajetoria />,
      },
      {
        path: "blog",
        element: <PageBlog />,
      },
      {
        path: "noticias",
        element: <PageNoticias />,
      },
      {
        path: "contact",
        element: <PageContact />,
      },
      {
        path: "feira-empreendedor",
        element: <FeiraEmpreendedor />,
      },
      {
        path: "se-essa-rua-fosse-minha",
        element: <MinhaRua />,
      },
      {
        path: "meu-sonho-princesa",
        element: <SonhoPrincesa />,
      },
      {
        path: "projetos-apoio",
        element: <ProjetosApoio />,
      },
    ]
  }
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);