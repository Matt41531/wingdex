import { useContext } from "react";
import { CardsContext } from "@/hooks/cardsContext";
import TransformedImage from "@/components/common/TransformedImage";

function Cards() {
  const { cardResults } = useContext(CardsContext);
  console.log(cardResults);
  return (
    <div className="flex-1 overflow-auto p-4 h-full w-full">
      <main className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 2xl:grid-cols-8 gap-1 min-h-0">
        {cardResults &&
          cardResults.map((card) => (
            <div 
              className="aspect-[240/336] w-[240px] mx-auto" 
              key={card.id}
            >
              <TransformedImage
                src={card.img_url}
                alt={card.name}
                width={240}
                height={336}
                className="w-full h-full hover:scale-110 transition object-cover"
                quality={85}
              />
            </div>
          ))}
      </main>
    </div>
  );
}

export default Cards;
