import React from "react";
import CardList from "../../Components/CardList/CardList";
import CARD_DATA from "../../Data/cardData";

import "./Home.scss";
function Home() {
  return (
    <>
      <main className="home">
        {CARD_DATA.map((data) => {
          const { id, title, cards } = data;
          return (
            <CardList key={id} cardListId={id} title={title} cards={cards} />
          );
        })}
      </main>
    </>
  );
}

export default Home;
