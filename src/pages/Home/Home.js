import "./Home.css";
import PlanTrip from "../../components/PlanTrip/PlanTrip";
import { Citycard } from "../../components/CityCard/citycard";
import { fetchDestinations } from "../../utils/destinationsFetch";
import { CategoryCard } from "../../components/CategoryCard/CategoryCard";


export const Home = () => {
    const main = document.querySelector("main");
    const destinations = fetchDestinations()


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
        <div class="category-links">
        ${CategoryCard("./src/assets/img/flights-category-image.png", "Flights", "Search flights & places and book for your amazing trips.")}
        ${CategoryCard("./src/assets/img/hotels-category-image.png", "Hotels", "Search our best hotels & places and book for your  amazing trips.")}
        </div>
    `
};

