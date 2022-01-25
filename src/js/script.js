import { ApiRestaurante } from "./consumirAPI.js";
import { Vitrine } from "./vitrine.js"
import { Carrinho } from "./carrinho.js"

const input = document.querySelector('.barraPesquisaProduto')
const button = document.querySelector('.searchBtn')
const filtersBtn1 = document.getElementById("filters--button_1")
const filtersBtn2 = document.getElementById("filters--button_2")
const filtersBtn3 = document.getElementById("filters--button_3")
const filtersBtn4 = document.getElementById("filters--button_4")

Vitrine.produtosArray = await ApiRestaurante.buscaImagens()
console.log(Vitrine.produtosArray)
Vitrine.colocarItensNaVitrine()

button.addEventListener('click', (evt) => {
    evt.preventDefault()
    Vitrine.pesquisarItens(input.value)
})

filtersBtn1.addEventListener('click', (evt) => {
    evt.preventDefault()
    Vitrine.colocarItensNaVitrine()
})

filtersBtn2.addEventListener('click', (evt) =>{
    evt.preventDefault()
    Vitrine.pesquisarItens('Panificadora')
})

filtersBtn3.addEventListener('click', (evt) =>{
    evt.preventDefault()
    Vitrine.pesquisarItens('Frutas')
})

filtersBtn4.addEventListener('click', (evt) =>{
    evt.preventDefault()
    Vitrine.pesquisarItens('Bebidas')
})


//Vitrine.ul.addEventListener('click', adicionarAoCarrinho)


