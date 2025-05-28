import type { FilterImpl } from "@/types/FilterImpl";
import apiClient from "./apiClient";

export const getJokesInititalLoad = async (language: string = "en") => {
  try {
    const response = await apiClient.get(
      `/joke/Any?safe-mode&lang=${language}&amount=10`
    );

    return response;
  } catch (error) {
    throw error;
  }
};

export const getJokesWithFilter = async (
  filter: FilterImpl,
  language: string
) => {
  const category = filter.category;
  const queryString = createQueryString(filter, language);

  try {
    const url = `/joke/${category}?${queryString}`;

    const response = await apiClient.get(url);

    return response;
  } catch (error) {
    if (error instanceof Error) {
      throw error;
    }
    throw new Error(`Error fetching jokes: ${String(error)}`);
  }
};

const createQueryString = (filter: FilterImpl, language: string) => {
  const queryParams = [];

  if (language) {
    queryParams.push(`lang=${language}`);
  }
  if (filter.safeMode) {
    queryParams.push("safe-mode");
  }
  if (filter.searchTerm) {
    queryParams.push(`contains=${encodeURIComponent(filter.searchTerm)}`);
  }

  queryParams.push("amount=10");

  return queryParams.join("&");
};
