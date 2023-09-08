import "./Home.css";
import PlanTrip from "../../components/PlanTrip/PlanTrip";
import { Citycard } from "../../components/CityCard/citycard";
import { CategoryCard } from "../../components/CategoryCard/CategoryCard";
import { linkPage } from "../../utils/linkpage";
import { Flights } from "../Flights/Flights";
import { Hotels } from "../Hotels/Hotels";
import { destinations } from "../../services/destinationsFetch";


export const Home = () => {

    const main = document.querySelector("main");

    main.innerHTML = `
        ${PlanTrip()}
        <div class="discover">
            <h2>Discover your love</h2>

        <div class="love-container">

        
        ${destinations.map((city) => 
            
            (Citycard(city.images[0], city.name, city.country))
            
            
        )   
    }
    

            </div>
        </div>
        <div class="category-links">
        ${CategoryCard("./src/assets/img/flights-category-image.png", "Flights", "Search flights & places and book for your amazing trips.")}
        ${CategoryCard("./src/assets/img/hotels-category-image.png", "Hotels", "Search our best hotels & places and book for your  amazing trips.")}
        </div>
    `
    linkPage("#btn-Flights", Flights, document.querySelector("main"));
    linkPage("#btn-Hotels", Hotels);
};

export const fadeout = (element) => {
    element.classList.add("fadeout")
    element.classList.remove("fadein")
}

export const fadein = (element) => {
    element.classList.add("fadein")
    element.classList.remove("fadeout")
}

