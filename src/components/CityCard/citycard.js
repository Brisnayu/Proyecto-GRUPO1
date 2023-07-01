import "./Citycard.css";

export const Citycard = (img, title, city) => {
  return `
    <div class="container-card">
        <img src=${img} alt=${title} />
        <div class="container-text-card">   
            <h2>${title}</h2>
            <div>
            <img src="./src/assets/Icons/ubicacion.png" alt="icon-direction" />
            <p>${city}</p>
            </div>
        </div>
    </div>

  `;
};
