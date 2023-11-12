export const getAllCountries = async () => {
  const response = await fetch(`https://restcountries.com/v3.1/all`);

  const json = await response.json();

  if (!response) {
    throw new Error(json.messaje);
  }
  return json;
};

export const getPhoto = async (APIKEY, country) => {
  const response = await fetch(
    `https://pixabay.com/api/?key=${APIKEY}&q=${country.name.common}&image_type=photo`
  );

  const json = response.json();

  if (!response) {
    throw new Error(json.messaje);
  }

  return json;
};

export const getCountryByName = async (name) => {
  const response = await fetch(`https://restcountries.com/v3.1/name/${name}`);

  const json = await response.json();

  if (!response) {
    throw new Error(json.messaje);
  }

  return json;
};

export const getCountryByLanguage = async (language) => {
  const response = await fetch(
    `
    https://restcountries.com/v3.1/lang/${language}`
  );
  const json = await response.json();

  if (!response) {
    throw new Error(json.messaje);
  }
  return json;
};
