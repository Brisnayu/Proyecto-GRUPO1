import "./CategoryCard.css";

export const CategoryCard = (img, category, description) => {
  return `
    <div class="category-card-container" style="background-image:url(${img})">
        <div class="category-text-container">   
            <h2>${category}</h2>
            <p>${description}</p>
            <button id="btn${category}" class="category-button"><img src="./src/assets/icons/paper-plane.png"> Show ${category}</img></button>
        </div>
    </div>`

  ;
};