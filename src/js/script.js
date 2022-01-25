import { ApiRestaurante } from "./consumirAPI.js";
import { Vitrine } from "./vitrine.js"

Vitrine.produtosArray = await ApiRestaurante.buscaImagens()
console.log(Vitrine.produtosArray)

Vitrine.colocarItensNaVitrine()