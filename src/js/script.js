import { ApiRestaurante } from "./consumirAPI.js";
import { Vitrine } from "./vitrine.js"
import { Carrinho } from "./carrinho.js"

const input = document.querySelector('.barraPesquisaProduto')

Vitrine.produtosArray = await ApiRestaurante.buscaImagens()
console.log(Vitrine.produtosArray)

input.addEventListener('keyup', (evt) => {
    evt.preventDefault()
    Vitrine.pesquisarItens(input.value)
})

filtersBtn1.addEventListener('click', (evt) => {
    selecionado.style.border = 'none'
    selecionado = filtersBtn1
    selecionado.style.border = '1px solid black'
    evt.preventDefault()
    Vitrine.colocarItensNaVitrine()
    filtersBtn1.classList.add()
})

filtersBtn2.addEventListener('click', (evt) => {
    selecionado.style.border = 'none'
    selecionado = filtersBtn2
    selecionado.style.border = '1px solid black'
    evt.preventDefault()
    Vitrine.pesquisarItens('Panificadora')
})

filtersBtn3.addEventListener('click', (evt) => {
    selecionado.style.border = 'none'
    selecionado = filtersBtn3
    selecionado.style.border = '1px solid black'
    evt.preventDefault()
    Vitrine.pesquisarItens('Frutas')
})

filtersBtn4.addEventListener('click', (evt) => {
    selecionado.style.border = 'none'
    selecionado = filtersBtn4
    selecionado.style.border = '1px solid black'
    evt.preventDefault()
    Vitrine.pesquisarItens('Bebidas')
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