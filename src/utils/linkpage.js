import { fadein, fadeout } from "../pages/Home/Home";
import { bgImage } from "./backgroundImage";

export const linkPage = (id, page, element) => {
  document.querySelector(id).addEventListener("click", () => {
    if (element) {
      fadeout(element);
    }

    setTimeout(() => {
      page();
      if (element) {
        fadein(element);
      }
    }, 500);

    const navLink = document.querySelector(id);
    const navLinks = document.querySelectorAll(".navlink");
    const imageBackground = document.querySelector(".img");

    navLinks.forEach((link) => {link.classList.remove("active");})

    if (navLink.classList.contains("active")) {
      navLink.classList.remove("active");
    } else {
      navLink.classList.add("active");
    }

    console.log(id);

      let background = bgImage[id.replace("#", "")];
      console.log(background);
    
      imageBackground.style.backgroundImage = `url(${background})`;

  });
};
