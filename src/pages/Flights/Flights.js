import { ButtonApp } from "../../components/Button/button";
import { createCards, cardLayout } from "../../components/CardLayout/cardLayout";
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
${cardLayout("Flights")}
    `

    createCards(mockExampleFlight, "flights");
    
};