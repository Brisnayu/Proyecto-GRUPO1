import "./buttonGreen.css";

export const ButtonGreen = (text) => {
  return `
    <button class="green-btn">
      ${text} 
      <img src="/src/assets/icons/search.svg" alt="search icon" class="search-icon"/> 
    </button>

  `;
};