import { useState } from "react";
import { getJokesInititalLoad, getJokesWithFilter } from "./jokeService";
import type { JokeImpl } from "@/types/JokeImpl";
import type { FilterImpl } from "@/types/FilterImpl";

export default function useJoke() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error>();
  const [jokes, setJokes] = useState<JokeImpl[]>();

  const getInitialJokes = async (language: string) => {
    try {
      setIsLoading(true);
      setJokes([]);
      
      const response = await getJokesInititalLoad(language);

      setJokes(response.data.jokes);
    } catch (error) {
      setError(error instanceof Error ? error : new Error(String(error)));
    } finally {
      setIsLoading(false);
    }
  };

  const getFilteredJokes = async (filter: FilterImpl, language: string) => {
    try {
      setIsLoading(true);
      setJokes([]);

      const response = await getJokesWithFilter(filter, language);

      setJokes(response.data.jokes);
    } catch (error) {
      if (error instanceof Error) {
        setError(error);
      } else {
        setError(error instanceof Error ? error : new Error(String(error)));
      }
    } finally {
      setIsLoading(false);
    }
  };

  return {
    isLoading,
    error,
    jokes,
    getInitialJokes,
    getFilteredJokes,
  };
}
