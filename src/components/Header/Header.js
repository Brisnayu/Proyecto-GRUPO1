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

<figure>
<img src="" alt="">
<input type="date" id="input-date" >
</input>
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
