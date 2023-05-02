import { useRoutes } from "react-router-dom";
import { Home } from "../components/Home";
import { Gallery } from "../components/Gallery";
import { PhotoItem } from "../components/PhotoItem";

export const MainRoutes = () =>
  useRoutes([
    { path: "/", element: <Home /> },
    { path: "/galeria/:id", element: <Gallery /> },
    { path: "/foto/:id", element: <PhotoItem /> },
  ]);
