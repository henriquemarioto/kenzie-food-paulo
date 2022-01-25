import { ApiRestaurante } from "./consumirAPI.js";
import { Vitrine } from "./vitrine.js"
import { Carrinho } from "./carrinho.js"

const input = document.querySelector('.barraPesquisaProduto')
const button = document.querySelector('.searchBtn')
const filtersBtn1 = document.getElementById("filters--button_1")
const filtersBtn2 = document.getElementById("filters--button_2")
const filtersBtn3 = document.getElementById("filters--button_3")
const filtersBtn4 = document.getElementById("filters--button_4")
let selecionado = filtersBtn1

Vitrine.produtosArray = await ApiRestaurante.buscaImagens()
console.log(Vitrine.produtosArray)
Vitrine.colocarItensNaVitrine()

button.addEventListener('click', (evt) => {
    selecionado.style.border = 'none'
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

filtersBtn2.addEventListener('click', (evt) =>{
    selecionado.style.border = 'none'
    selecionado = filtersBtn2
    selecionado.style.border = '1px solid black'
    evt.preventDefault()
    Vitrine.pesquisarItens('Panificadora')
})

filtersBtn3.addEventListener('click', (evt) =>{
    selecionado.style.border = 'none'
    selecionado = filtersBtn3
    selecionado.style.border = '1px solid black'
    evt.preventDefault()
    Vitrine.pesquisarItens('Frutas')
})

filtersBtn4.addEventListener('click', (evt) =>{
    selecionado.style.border = 'none'
    selecionado = filtersBtn4
    selecionado.style.border = '1px solid black'
    evt.preventDefault()
    Vitrine.pesquisarItens('Bebidas')
})

//Vitrine.ul.addEventListener('click', adicionarAoCarrinho)


