import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { api } from "../../services/api";

import { Galery } from "../../types/Gallery";
import { Title } from "../commons/Title";
import "./Home.css";

export const Home = () => {
  const [gallery, setGallery] = useState<Galery[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadPhotos();
  }, []);

  const loadPhotos = async () => {
    setLoading(true);
    const json = await api.getAll("/albums");
    setLoading(false);
    setGallery(json);
  };

  return (
    <>
      <h1>Galeria de fotos</h1>
      {loading && <div>Carregando...</div>}
      <div className="container-photos">
        {gallery.map(({ title, id }) => (
          <div key={id} className="link-container">
            <Link to={`/galeria/${id}`}>{title}</Link>
          </div>
        ))}
      </div>
    </>
  );
};
