import { ApiRestaurante } from "./consumirAPI.js";
import { Vitrine } from "./vitrine.js"
import { Carrinho } from "./carrinho.js"

const input = document.querySelector('.barraPesquisaProduto')
const button = document.querySelector('.searchBtn')

Vitrine.produtosArray = await ApiRestaurante.buscaImagens()
console.log(Vitrine.produtosArray)

button.addEventListener('click', (evt) => {
    evt.preventDefault()
    Vitrine.pesquisarItens(input.value)
})

//Vitrine.ul.addEventListener('click', adicionarAoCarrinho)


const iniciarSite = async () => {
    Vitrine.produtosArray = await ApiRestaurante.buscaImagens()
    Vitrine.colocarTodosItensNaVitrine()
    Carrinho.preencherCarrinho()
}
iniciarSite()


Vitrine.ul.addEventListener('click', Carrinho.adicionarAoCarrinho)
Carrinho.ul.addEventListener('click', Carrinho.removeItemCarrinho)
