import "./style.css";

// Constantes
import { Header, funciondate } from "./src/components/Header/Header";
import Footer from "./src/components/Footer/Footer";
import { getDestinations } from './src/services/destinationsFetch'
// Funcionalidad
import { linkPage } from "./src/utils/linkpage";

async function initializeApp() {
    await getDestinations();
    document.querySelector("Header").innerHTML = Header();
    funciondate()
    Home();
    // Ejecutando los links
    linkPage("#homelink", Home);
linkPage("#flightlink", Flights);
linkPage("#hotelslink", Hotels);
linkPage("#discoverlink", Discover);
linkPage("#aboutuslink", AboutUs);
linkPage("#contactlink", Contact);

  }
  
initializeApp();


document.querySelector("Footer").innerHTML = Footer();

// Paginas!
import { Home } from "./src/pages/Home/Home";
import { Flights } from "./src/pages/Flights/Flights";
import { Hotels } from "./src/pages/Hotels/Hotels";
import { Discover } from "./src/pages/Discover/Discover";
import { AboutUs } from "./src/pages/AboutUs/AboutUs";
import { Contact } from "./src/pages/Contact/Contact";







