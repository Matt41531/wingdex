import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import { useEffect, useState } from "react";
import { CardsContext } from "@/hooks/cardsContext";
import Cards from "@/pages/Cards";
import { Card } from "@/types/card";

function Base() {
  const [mounted, setMounted] = useState(false);
  const [cardResults, setCardResults] = useState<Card[]>([]);
  const [selectedCard, setSelectedCard] = useState<Card | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  return (
      <div className="flex flex-col items-center justify-center h-screen w-full">
        <CardsContext.Provider value={{ cardResults, setCardResults, selectedCard, setSelectedCard}}>
          <Header />
            <Cards />
          <Footer />
        </CardsContext.Provider>
      </div>
  );
}

export default Base;
