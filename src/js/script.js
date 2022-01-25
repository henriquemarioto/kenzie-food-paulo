import { ApiRestaurante } from "./consumirAPI.js";
import { Vitrine } from "./vitrine.js"
import { Carrinho } from "./carrinho.js"

const iniciarSite = async () => {
    Vitrine.produtosArray = await ApiRestaurante.buscaImagens()
    Vitrine.colocarTodosItensNaVitrine()
    Carrinho.preencherCarrinho()
}
iniciarSite()


Vitrine.ul.addEventListener('click', Carrinho.adicionarAoCarrinho)
Carrinho.ul.addEventListener('click', Carrinho.removeItemCarrinho)