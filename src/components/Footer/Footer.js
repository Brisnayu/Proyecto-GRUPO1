import "./Footer.css";

const Footer = () => {
  return `
    <article class="logo">
        <section>
            <img src="./public/assets/icon-footer/Phnes-Travels.png" alt="icon logo" />
        </section>
        <section>
        <a href="#"><img src="./public/assets/icon-footer/icon_facebook.png" alt="logo facebook" /> </a>
        <a href="#"><img src="./public/assets/icon-footer/icon_twitter.png" alt="logo twitter"  /> </a>
        <a href="#"><img src="./public/assets/icon-footer/icon_youtube.png" alt="logo youtube"  /> </a>
        <a href="#"><img src="./public/assets/icon-footer/icon_instagram.png" alt="logo instagram"  /> </a>
        </section>
    
  </article>

  <article class="info-footer">
    <ul>Links</ul>
    <a href="#"><li>Flights</li></a>
    <a href="#"></a><li>Stays</li></a>
    <a href="#"></a><li>Discover</li></a>
    <a href="#"></a><li>About Us</li></a>
    <a href="#"></a><li>Contact</li></a>
  </article>

  <article class="info-footer">
    <ul>Our Activities</ul>
    <a href="#"></a><li>Tour</li></a>
    <a href="#"></a><li>Kayaking</li></a>
    <a href="#"></a><li>Cruising</li></a>
    <a href="#"></a><li>Multi-activities</li></a>
  </article>

  <article class="info-footer">
    <ul>About Us</ul>
    <a href="#"><li>Our Story</li></a>
    <a href="#"><li>Work with us</li></a>

  </article>

  <article class="info-footer">
    <ul>Contact</ul>
    <li>Address: Pe. Holandia No.205A Millennium City, PH1</li>
    <li>Phone: 0234567890</li>
    <li>Email: phnes.travels@gmail.com</li>
    <li>Maps: Millennium City, Accra</li>
  </article>
    
    `;
};

export default Footer;
