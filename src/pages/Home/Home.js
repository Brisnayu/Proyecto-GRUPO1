import "./Home.css";
import PlanTrip from "../../components/PlanTrip/PlanTrip";
import { Citycard } from "../../components/CityCard/citycard";

export const Home = () => {
    const main = document.querySelector("main");

    main.innerHTML = `
        ${PlanTrip()}
        <div>
            <h4>PlanTrip</h4>
            <h2>Discover your love</h2>
            ${Citycard("./src/assets/img/santorini.png", "Santorini", "Greece")}
        </div>
    `
};