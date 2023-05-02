import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { api } from "../../services/api";
import { Photo } from "../../types/Photo";

export const PhotoItem = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [photos, setPhoto] = useState<Photo[]>([]);

  useEffect(() => {
    loadingPhoto();
  }, []);

  const handleBackPage = () => navigate(-1);

  const loadingPhoto = async () => {
    setLoading(true);
    const json = await api.getById("/photos", id);
    setLoading(false);
    setPhoto(json);
    console.log(json);
  };

  return (
    <div>
      <button onClick={handleBackPage}>Voltar</button>

      {loading && <div>Carregando...</div>}

      {!loading && photos && (
        <div>
          {photos.map(({ title, url, id }) => (
            <ul key={id}>
              <img src={url} alt="" />
              <li>{title}</li>
            </ul>
          ))}
          {photos}
        </div>
      )}
    </div>
  );
};
