import { ButtonApp } from "../../components/Button/button";
import "./Discover.css";

export const Discover = () => {
    const main = document.querySelector("main");

    main.innerHTML = `
        <h1>Estoy en la página de Discover</h1>
        <div class="button-prueba"></div>
    `
ButtonApp({
    padre: document.querySelector(".button-prueba"),
    texto: "click",
    tipo: "rojo"
})
    
};

