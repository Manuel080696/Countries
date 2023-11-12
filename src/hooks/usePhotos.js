import { useEffect } from "react";
import { useState } from "react";
import { getPhoto } from "../services";

const usePhotos = (APIKEY, country) => {
  const [error, setError] = useState("");
  const [photo, setPhoto] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadCountries = async () => {
      try {
        const data = await getPhoto(APIKEY, country);

        data && setPhoto(data.hits[9].largeImageURL);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    loadCountries();
  }, [loading, APIKEY, country]);

  return {
    photo,
    error,
  };
};

export default usePhotos;
