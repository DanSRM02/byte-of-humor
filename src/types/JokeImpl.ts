import type { FlagImpl } from "./FlagImpl";

export interface JokeImpl {
  category: string;
  delivery: string;
  flags: FlagImpl;
  joke?: string;
  id: number;
  lang: string;
  safe: boolean;
  setup: string;
  type: string;
}
