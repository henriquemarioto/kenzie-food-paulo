console.log("aaaa")

import { ApiRestaurante } from "./consumirAPI.js";

const vitrine = document.querySelector('productList')

const produtosArray = await ApiRestaurante.buscaImagens()
console.log(produtosArray)

const wine = "./src/img/wine.svg"
const fruits = "./src/img/fruits.svg"
const bread = "./src/img/bread.svg"

function criarTemplate({ id, nome, preco, categoria, descricao, imagem }) {

    /* Criando elementos do HTML */
    const liProduct = document.createElement('li')
    const divProductHead = document.createElement('div')
    const figure = document.createElement('figure')
    const img = document.createElement('img')
    const divSection = document.createElement('div')
    const imgSection = document.createElement('img')
    const pSection = document.createElement('p')
    const h3 = document.createElement('h3')
    const pDescription = document.createElement('p')
    const divFooter = document.createElement('div')
    const pPrice = document.createElement('p')
    const button = document.createElement('button')
    const buttonIMG = document.createElement('img')

    /* Atribuindo valores aos elementos */
    h3.innerText            = nome
    img.src                 = imagem
    pSection.innerText      = categoria
    pPrice.innerText        = preco
    pDescription.innerText  = descricao
    buttonIMG.src           = "./src/img/addToCart.svg"

    
    if        (categoria === "Panificadora") {
        imgSection.src = bread
    } else if (categoria === "Bebidas") {
        imgSection.src = wine
    } else if (categoria === "Frutas") {
        imgSection.src = fruits
    }

    /* Adicionando elementos no template */
    figure.appendChild(img)
    divSection.appendChild(imgSection)
    divSection.appendChild(pSection)
    divProductHead.appendChild(figure)
    divProductHead.appendChild(divSection)
    liProduct.appendChild(divProductHead)
    liProduct.appendChild(h3)
    liProduct.appendChild(pDescription)
    divFooter.appendChild(pPrice)
    divFooter.appendChild(button)
    button.appendChild(buttonIMG)
    liProduct.appendChild(divFooter)

    /* Atribuindo classes aos elementos */

    liProduct.classList('product')
    divProductHead.classList.add('product--head')
    figure.classList.add('product--figure')
    img.classList('product--img')
    divSection.classList.add('product--section')
    h3.classList.add('product--title')
    pDescription.classList.add('product--description')
    divFooter.classList.add('product--footer')
    pPrice.classList.add('product--price')
    button.classList.add('product--addToCart')


    //ACREDITO QUE FALTA ADICIONAR LI NA UL. VERIFICAR ANTES DE TESTAR

    return liProduct
}