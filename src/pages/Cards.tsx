import { useContext } from "react";
import { CardsContext } from "@/hooks/cardsContext";
import { Card } from "@/types/card";
// import TransformedImage from "@/components/common/TransformedImage";

function Cards() {
  const { cardResults, setSelectedCard, selectedCard } =
    useContext(CardsContext);
  console.log(cardResults);

  function handleCardClick(card: Card): void {
    setSelectedCard(card);
    console.log(card.name + " was clicked");
  }
  function handleSelectedCardClick(): void {
    setSelectedCard(null);
  }
  return (
    <div className="flex-1 overflow-auto p-4 h-full w-full">
      <main className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 2xl:grid-cols-8 gap-1 min-h-0">
        {cardResults &&
          cardResults.map((card) => (
            <div className="aspect-[240/336] w-[240px] mx-auto" key={card.id}>
              <img
                src={card.img_url}
                alt={card.name}
                width={240}
                height={336}
                className={
                  "w-full h-full hover:scale-110 transition object-cover"
                }
                onClick={() => handleCardClick(card)}
              />
            </div>
          ))}
      </main>

      {selectedCard && (
          <div className="flex items-center justify-center fixed inset-0 bg-black/50">
            
            <img
              src={selectedCard.img_url}
              alt={selectedCard.name}
              width={240}
              height={336}
              className={"transition object-cover z-50 scale-[2]"}
              onClick={handleSelectedCardClick}
            />
          </div>
        )}
    </div>
  );
}

export default Cards;
