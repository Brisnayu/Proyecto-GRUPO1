import { BookCard } from "../BookCard/BookCard";
import { ButtonApp } from "../Button/button";
import "./cardLayout.css";

export const cardLayout = (title) => {
  return `
    <div class="container-cartLayout">

            <h3>${title}</h3>
            <h2>Discover your love</h2>

          <div class="button-initial"></div>
        <div class="cartLayout-container"></div>
    </div>`;

  //TODO: crear componente BOTON (booking-btn) ????
};

export const createCards = (card, page) => {

  for (const element of card) {
    document.querySelector(".cartLayout-container").innerHTML +=
      BookCard(element);
  }

const containerPadres = document.querySelectorAll('.button-container');

  for (let i = 0; i < containerPadres.length; i++) {
    ButtonApp({
    padre: containerPadres[i],
    texto: `Book ${page}`,
    tipo: "button-white",
    width: "100%",
  })
  }

  ButtonApp({
    padre: document.querySelector(".button-initial"),
    texto: "See all",
    tipo: "button-white",
  })
};
