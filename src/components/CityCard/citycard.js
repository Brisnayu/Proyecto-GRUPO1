import "./Citycard.css";

export const Citycard = (img, city, title) => {
  return `
    <div class="container-card">
        <img src="${img}" alt="${title}" />
        <div class="container-text-card">   
            <h2>${city}</h2>
            <div>
            <img src="./src/assets/Icons/ubicacion.png" alt="icon-direction" />
            <p>${title}</p>
            </div>
        </div>
    </div>
  `;
};
