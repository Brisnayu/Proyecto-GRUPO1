import "./Home.css";
import PlanTrip from "../../components/PlanTrip/PlanTrip";

export const Home = () => {
    const main = document.querySelector("main");

    main.innerHTML = `
        ${PlanTrip()}
    `
};