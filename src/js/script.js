import { ApiRestaurante } from "./consumirAPI.js";
import { Vitrine } from "./vitrine.js"
import { Carrinho } from "./carrinho.js"

const input = document.querySelector('.barraPesquisaProduto')
const button = document.querySelector('.searchBtn')

Vitrine.produtosArray = await ApiRestaurante.buscaImagens()
console.log(Vitrine.produtosArray)
Vitrine.colocarItensNaVitrine()

button.addEventListener('click', (evt) => {
    evt.preventDefault()
    Vitrine.pesquisarItens(input.value)
})

//Vitrine.ul.addEventListener('click', adicionarAoCarrinho)


