import { createContext } from "react";
import { Card } from "@/types/card";

export const CardsContext = createContext<{
  cardResults: Card[],
  setCardResults: (cardResults: Card[]) => void,
  selectedCard: Card | null,
  setSelectedCard: (card: Card | null) => void,
}>({
  cardResults: [],
  setCardResults: () => {},
  selectedCard: null,
  setSelectedCard: () => {},
});