import './style.css'
import { Header } from './src/components/Header/Header';
import Footer from "./src/components/Footer/Footer";


document.querySelector('Header').innerHTML = Header()
document.querySelector("Footer").innerHTML = Footer();

