import "./Home.css";
import PlanTrip from "../../components/PlanTrip/PlanTrip";
import { Citycard } from "../../components/CityCard/citycard";

export const Home = () => {
    const main = document.querySelector("main");

    main.innerHTML = `
        ${PlanTrip()}
        <div class="discover">
            <h2>Discover your love</h2>

        <div class="love-container">
            ${Citycard("./src/assets/img/santorini.png", "Santorini", "Greece")}
            ${Citycard("./src/assets/img/phuket.png", "Paris", "Francia")}
            ${Citycard("./src/assets/img/phuket.png", "Phuket", "Thailand")}
            </div>
        </div>
    `
};

