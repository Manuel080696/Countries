import usePhotos from "../hooks/usePhotos";
import "../styles/PhotoCard.css";

export const PhotoCard = ({ country, APIKEY }) => {
  const { photo } = usePhotos(APIKEY, country);

  return (
    <img
      src={photo.length ? `${photo}` : "/notFound.jpg"}
      alt={country.name.common}
      className="photoCard"
    />
  );
};
