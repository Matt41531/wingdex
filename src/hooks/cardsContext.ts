import { createContext } from "react";

export const CardsContext = createContext<{
  cardResults: any,
  setCardResults: (cardResults: any) => void,
}>({
  cardResults: undefined,
  setCardResults: () => {},
});