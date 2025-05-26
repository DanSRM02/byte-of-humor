import apiClient from "./apiClient";

export const getJokes = async function getJokesFromACountry() {
  return await apiClient
    .get("/joke/Any?lang=fr")
    .then((response) => response.data);
};

export const getCategories = () => {
  return apiClient.get("/categories").then((response) => response.data);
};

export const getFlags = () => {}



