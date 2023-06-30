import "./style.css";
import { Header } from "./src/components/Header/Header";
import Footer from "./src/components/Footer/Footer";

document.querySelector("Header").innerHTML = Header();
document.querySelector("Footer").innerHTML = Footer();

// Paginas!
import { Home } from "./src/pages/Home/Home";
import { Flights } from "./src/pages/Flights/Flights";

// Funcionalidad
import { linkPage } from "./src/utils/linkpage";

Home();

// Ejecutando los links
linkPage("#homelink", Home);
linkPage("#flightlink", Flights);
