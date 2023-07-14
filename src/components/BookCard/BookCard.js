import "./BookCard.css";


export const BookCard = (elemento) => {
  const {img, city, description, price, type} = elemento
    return `
      <div class="container-book">
          <img src=${img} alt=${city} />
          <div class="container-text-book">   
              <h2>${city}</h2>
              <p>${description}</p>
              <h2>$ ${price}</h2>
          </div>
          <button>Book ${type}</button>
      </div>
  
    `;
  };