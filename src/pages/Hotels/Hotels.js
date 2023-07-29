import { cardLayout, createCards } from "../../components/CardLayout/cardLayout";
import "./Hotels.css";
// Estos son datos de ejemplo, cuando tengamos el backend los borraremos.
const mockExampleHotels = [
    {
    type: "hotel",
    city: "Mellia Hotels",
    description: "ansdjnsakjdnaskjdas",
    price: "40",
    img:"./src/assets/img/phuket.png"
    },
    {
    type: "hotel",
    city: "Lisboa Hotels",
    description: "ansdjnsakjdnaskjdas",
    price: "90",
    img:"./src/assets/img/phuket.png"
    },
    {
    type: "hotel",
    city: "San francisco Hotels",
    description: "ansdjnsakjdnaskjdas",
    price: "30",
    img:"./src/assets/img/phuket.png"
    },
    {
    type: "hotel",
    city: "Tokio Hotels",
    description: "ansdjnsakjdnaskjdas",
    price: "160",
    img:"./src/assets/img/phuket.png"
    },
    ]
    export const Hotels = () => {
        const main = document.querySelector("main");

        main.innerHTML = `
        ${cardLayout("Hotels")}
        `
    
        createCards(mockExampleHotels, "hotels");
    };