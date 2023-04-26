import { useState, useEffect } from "react";

import { Photo } from "../../types/Photo";
import { api } from "../../services/api";

import { Title } from "../commons/Title";

export const Home = () => {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadPhotos();
  }, []);

  const loadPhotos = async () => {
    setLoading(true);
    const json = await api.listar("/photos");
    setLoading(false);
    setPhotos(json);
  };

  return (
    <>
      <h1>Galeria de fotos</h1>
      {loading && <div>Carregando...</div>}
      <div>
        {photos.map(({ title, url, thumbnailUrl, id }) => (
          <div key={id}>
            <ul>
              <li>
                <img src={thumbnailUrl} alt={title} />
              </li>
              <li>
                <Title title={title} />
                <p>{url}</p>
              </li>
            </ul>
          </div>
        ))}
      </div>
    </>
  );
};
