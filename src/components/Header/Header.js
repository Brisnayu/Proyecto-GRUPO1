import { cities } from '../../data/cities';
import { LoginNav } from '../Navbars/LoginNav';
import { PagesNav } from '../Navbars/PagesNav';
import { Title } from '../Title/Title';
import './Header.css'

export const Header = () => {
    return `
<div class="img-container">
<div class="img"></div>
<div class="logoandnavbar-container">
<img src="../public/assets/icon-footer/Phnes-Travels.png" alt="Logo" class="logo">
<div class="navigation-container">
${PagesNav}
${LoginNav}
</div>
</div>
${Title}
<div class="inputs-button-container">
<div class="inputs-container">
<figure>
<img src="" alt="">

<p>From</p>
<select id="from-select" >

${cities.map((city) => (
`<option value=${city}>
${city}
</option>`
))}

</select>

</figure>



<figure>
<img src="" alt="">
<p>To</p>
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
<p>Date</p>
<input type="date" id="input-date" >
<option value=""></option>
</input>
</figure>


<div>

<button></button>

</div>


<img src="" alt="">
</div>
`;

}
