import { ApiRestaurante } from "./consumirAPI.js";

const vitrine = document.querySelector('productList')

const produtosArray = await ApiRestaurante.buscaImagens()
console.log(produtosArray)

const template = ({id, nome, preço, categoria, descricao, imagem} ) => {
        
    /* Criando elementos do HTML */
    const div               = document.createElement('div')
    const divProduct        = document.createElement('div')
    const divProductHead    = document.createElement('div')
    const figure            = document.createElement('figure')
    const img               = document.createElement('img')
    const divSection        = document.createElement('div')
    const imgSection        = document.createElement('img')
    const pSection          = document.createElement('p')
    const h3                = document.createElement('h3')
    const pDescription      = document.createElement('p')
    const divFooter         = document.createElement('div')
    const pPrice            = document.createElement('p')
    const button            = document.createElement('button')

    /* Atribuindo valores aos elementos */
    
    
    /* Adicionando elementos no template */

}