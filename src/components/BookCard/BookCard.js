import { ButtonApp } from "../Button/button";
import "./BookCard.css";

export const BookCard = (elemento) => {
  const { name, flights, images } = elemento;

  console.log(elemento)

  return `
      <div class="container-book" style="background-image:url(${images[0]})">
          <div class="container-text-book">   
            <div>
              <p>Viaja desde ${name}</p>
              <p>a ${flights[0].arrivalCity}</p>
            </div>
              <h2>$ ${flights[0].price}</h2>
          </div>
          <div class="button-container">
      
          </div>  
      </div>
    `;
};
