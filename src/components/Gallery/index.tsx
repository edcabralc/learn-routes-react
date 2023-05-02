import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { api } from "../../services/api";
import { Photo } from "../../types/Photo";

export const Gallery = () => {
  const navigate = useNavigate();
  const handleBackPage = () => navigate(-1);
  const [loading, setLoading] = useState(true);
  const [photos, setPhotos] = useState<Photo[]>([]);

  useEffect(() => {
    loadPhotos();
  }, []);

  const loadPhotos = async () => {
    setLoading(true);
    const json = await api.getAll("/photos");
    setLoading(false);
    setPhotos(json);
  };
  return (
    <div>
      <button onClick={handleBackPage}>Voltar</button>
      {loading && <div>Carregando...</div>}

      {!loading && photos && (
        <div>
          {photos.map(({ url, id }) => (
            <Link key={id} to={`/foto/${id}`}>
              <img src={url} alt="" />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};
