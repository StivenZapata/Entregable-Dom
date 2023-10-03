import { header } from "./Dom.js";
import { index } from "./Dom.js";
import { footer } from "./Dom.js";

const encabezado = document.createElement("header");
const Inicio = document.createElement("section");
const pie = document.createElement("footer");

encabezado.innerHTML = header
document.body.appendChild(encabezado);
Inicio.innerHTML = index
document.body.appendChild(Inicio);
pie.innerHTML = footer
document.body.appendChild(pie);