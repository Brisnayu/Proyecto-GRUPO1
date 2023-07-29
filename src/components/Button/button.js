import "./button.css";

export const ButtonApp = ({ padre, texto, funcion, tipo, iconLeft, iconRight, width }) => {

    const Button$$ = document.createElement("button");

    Button$$.innerText = texto;
    Button$$.classList.add(tipo);
    Button$$.style.width = width;
    

    padre.appendChild(Button$$);
}




// Button({
//     padre: document.querySelector("div"),
//     texto: "",
//     funcion: () => {console.log("hola")},
//     tipo: "",
//     iconLeft: "",
//     iconRight: "",
// })