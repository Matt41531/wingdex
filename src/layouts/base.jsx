import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import { useEffect, useState } from "react";
import { CardsContext } from "@/hooks/cardsContext";
import Cards from "@/pages/Cards";

function Base() {
  const [mounted, setMounted] = useState(false);
  const [cardResults, setCardResults] = useState(undefined);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  return (
      <div className="flex flex-col items-center justify-center h-screen w-full">
        <CardsContext.Provider value={{ cardResults, setCardResults }}>
          <Header />
            <Cards />
          <Footer />
        </CardsContext.Provider>
      </div>
  );
}

export default Base;
