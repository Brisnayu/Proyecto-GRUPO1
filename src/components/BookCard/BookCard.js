import "./BookCard.css";

export const BookCard = (elemento, page) => {
  // const { name, flights, images } = elemento;


  return `
      <div class="container-book" style="background-image:url(${page === "flights" ? elemento?.images[0]:
      elemento.hotels[0].images[0]
    })">
          <div class="container-text-book">   
            <div>
              <p>${page === "flights" ? `Viaja desde ${elemento?.name}` :
              elemento.hotels[0].name
  }</p>
              <p>${page === "flights" ? `a ${elemento.flights[0].arrivalCity}`:
              elemento?.name
            }</p>
            </div>
              <h2>$ ${page === "flights" ? elemento.flights[0].price : elemento.hotels[0].price}</h2>
          </div>
          <div class="button-container">
      
          </div>  
      </div>`
    ;
};
