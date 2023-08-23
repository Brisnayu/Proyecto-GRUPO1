import { cities } from '../../data/cities';
import { ButtonGreen } from '../ButtonGreen/buttonGreen';
import { LoginNav } from '../Navbars/LoginNav';
import { PagesNav } from '../Navbars/PagesNav';
import { Title } from '../Title/Title';
import './Header.css'



export const Header = () => {

    return `
<div class="img-container">
<div class="img"></div>
<div class="logoandnavbar-container">
<img src="./src/assets/icon-footer/Phnes-Travels.png" alt="Logo" class="logo">
<div class="navigation-container">
${PagesNav}
${LoginNav}
</div>
</div>
${Title}
<div class="inputs-button-container">
<div class="inputs-container">
<figure>
<img src="./src/assets/Icons/Subtract.svg" alt="">

<select id="from-select" >

${cities.map((city) => (
`<option value=${city}>
${city}
</option>`
))}

</select>

</figure>



<figure>
<img src="./src/assets/Icons/Vector.svg" alt="">
<select id="to-select" >
${cities.map((city) => (
    `<option value=${city}>
    ${city}
    </option>`
    ))}
</select>
</figure>

<figure class="fecha">
        <label for="fecha" >
            <img src="./src/assets/Icons/Union.png">
        </label>
        <input id="fecha" type="date">
        <p class="p-date">Elige una fecha</p>
</figure>

<figure>
<img src="/src/assets/Icons/user.svg" alt="">
<select>
<option value="" disabled selected>Traveler - Class</option>
    <option>1 traveler</option>
    <option>2 travelers</option>
</select>
</input>
</figure>


<div>

${ButtonGreen("Find trip now")} 

</div>


<img src="" alt="">
</div>
`;

}

export const funciondate = () => {
    console.log("hola")
    const p = document.querySelector(".p-date");

    const abrirCalendario = (e) => {
    
        e.target.style = "width: 0px";
        const input = document.querySelector("#fecha");
        setTimeout(() => {
            input.style = "width: 110px";
            input.focus();
        }, 1000);
    
    }
    
    p.addEventListener("click", abrirCalendario);
    
    
    const input = document.querySelector("#fecha");
    
    const cerrarCalendario = (e) => {
    
        e.target.style = "width: 0px";
        const p = document.querySelector(".p-date");
        setTimeout(() => {
            p.style = "width: 110px";
        }, 1000);
    
    }
    
    input.addEventListener("blur", cerrarCalendario)
}

export const backgroundImage = () => {
    
    const imgBackground = document.querySelector(".img")

    // img.style.backgroundImage = nueva imagen
}