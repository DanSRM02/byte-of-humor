import { getJokesInititalLoad, getJokesWithFilter } from "./jokeService";
import type { JokeImpl } from "@/types/JokeImpl";
import type { FilterImpl } from "@/types/FilterImpl";
import type { Action, State } from "@/types/ReducerTypes";
import { useReducer } from "react";

export default function useJoke() {
  const initialState: State<JokeImpl> = {
    isLoading: false,
    error: "",
    jokes: [],
  };
  const jokeReducer = (state: State<JokeImpl>, action: Action<JokeImpl>) => {
    switch (action.type) {
      case "FETCH_INIT":
        return { ...state, isLoading: true, error: "" };
      case "FETCH_SUCCESS":
        return { ...state, isLoading: false, jokes: action.payload, error: "" };
      case "FETCH_FAILURE":
        return { ...state, isLoading: false, error: action.payload };
      default:
        return state;
    }
  };

  const [jokeState, jokeDispatch] = useReducer(jokeReducer, initialState);

  const getInitialJokes = async (language: string) => {
    try {
      jokeDispatch({ type: "FETCH_INIT" });
      const response = await getJokesInititalLoad(language);
      jokeDispatch({
        type: "FETCH_SUCCESS",
        payload: response.data.jokes,
      });
    } catch (error) {
      jokeDispatch({
        type: "FETCH_FAILURE",
        payload: error instanceof Error ? error.message : String(error),
      });
    }
  };

  const getFilteredJokes = async (filter: FilterImpl, language: string) => {
    try {
      jokeDispatch({ type: "FETCH_INIT" });
      const response = await getJokesWithFilter(filter, language);
      jokeDispatch({
        type: "FETCH_SUCCESS",
        payload: response.data.jokes,
      });
    } catch (error) {
      jokeDispatch({
        type: "FETCH_FAILURE",
        payload: error instanceof Error ? error.message : String(error),
      });
    }
  };

  return {
    jokeState,
    getInitialJokes,
    getFilteredJokes,
  };
}
