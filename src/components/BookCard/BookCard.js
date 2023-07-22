import "./BookCard.css";


export const BookCard = (elemento) => {
  const {img, city, description, price, type} = elemento
    return `
      <div class="container-book" style="background-image:url(${img})">
          <div class="container-text-book">   
            <div>
              <h2>${city}</h2>
              <p>${description}</p>
            </div>
              <h2>$ ${price}</h2>
          </div>
          <button class="booking-btn">Book ${type}</button>
      </div>
  
    `;
  };