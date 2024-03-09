import React from "react";
import { useAxios } from "./hooks";
import PlayingCard from "./PlayingCard";
import "./PlayingCardList.css";

/* Renders a list of playing cards.
 * Can also add a new card at random,
 * or remove all cards. */
function CardTable() {
  const [cards, addCard, clearCards] = useAxios();
  return (
    <div className="PlayingCardList">
      <h3>Pick a card, any card!</h3>
      <div>
        {/* Pass formatCard and base URL as arguments */}
        <button onClick={() => addCard("https://deckofcardsapi.com/api/deck/new/draw/")}>
          Add a playing card!
        </button>
        <button onClick={clearCards}>Clear the table</button>
      </div>
      <div className="PlayingCardList-card-area">
        {cards.map((card) => (
          <PlayingCard key={card.id} front={card.image} />
        ))}
      </div>
    </div>
  );
}

CardTable.defaultProps = {};

export default CardTable;
