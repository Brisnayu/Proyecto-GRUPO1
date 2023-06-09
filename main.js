import "./style.css";

// Constantes
import { Header } from "./src/components/Header/Header";
import Footer from "./src/components/Footer/Footer";

document.querySelector("Header").innerHTML = Header();
document.querySelector("Footer").innerHTML = Footer();

// Paginas!
import { Home } from "./src/pages/Home/Home";
import { Flights } from "./src/pages/Flights/Flights";
import { Hotels } from "./src/pages/Hotels/Hotels";
import { Discover } from "./src/pages/Discover/Discover";
import { AboutUs } from "./src/pages/AboutUs/AboutUs";
import { Contact } from "./src/pages/Contact/Contact";

// Funcionalidad
import { linkPage } from "./src/utils/linkpage";

Home();

// Ejecutando los links
linkPage("#homelink", Home);
linkPage("#flightlink", Flights);
linkPage("#hotelslink", Hotels);
linkPage("#discoverlink", Discover);
linkPage("#aboutuslink", AboutUs);
linkPage("#contactlink", Contact);
