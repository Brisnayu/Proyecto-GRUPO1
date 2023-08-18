import { fadein, fadeout } from "../pages/Home/Home";

export const linkPage = (id, page, element) => {
    document.querySelector(id).addEventListener('click', () => {
        if(element) {fadeout(element)}

        setTimeout(() => {
            page();
            if(element) {fadein(element)}
        }, 500);
    });
};