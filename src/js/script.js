import { ApiRestaurante } from "./consumirAPI.js";
import { Vitrine } from "./vitrine.js"
import { Carrinho } from "./carrinho.js"

Vitrine.produtosArray = await ApiRestaurante.buscaImagens()
console.log(Vitrine.produtosArray)
Vitrine.colocarItensNaVitrine()

Vitrine.ul.addEventListener('click', adicionarAoCarrinho)