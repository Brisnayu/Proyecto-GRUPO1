import { BookCard } from "../../components/BookCard/BookCard";
import "./Flights.css";
// Estos son datos de ejemplo, cuando tengamos el backend los borraremos.
const mockExampleFlight = [
{
type: "flight",
city: "Mallorca",
description: "ansdjnsakjdnaskjdas",
price: "40",
img:"./src/assets/img/phuket.png"
},
{
type: "flight",
city: "Lisboa",
description: "ansdjnsakjdnaskjdas",
price: "90",
img:"./src/assets/img/phuket.png"
},
{
type: "flight",
city: "San francisco",
description: "ansdjnsakjdnaskjdas",
price: "30",
img:"./src/assets/img/phuket.png"
},
{
type: "flight",
city: "Tokio",
description: "ansdjnsakjdnaskjdas",
price: "160",
img:"./src/assets/img/phuket.png"
},
]
export const Flights = () => {
    const main = document.querySelector("main");
    
    main.innerHTML = `
    <div class="container-flights">
        <h3>Destinations</h3>
        <h2>Discover your love</h2>
        <button>See all</button>
    </div>`;

    for (const flight of mockExampleFlight) {
    document.querySelector(".container-flights").innerHTML += BookCard(flight)
    }
    
};