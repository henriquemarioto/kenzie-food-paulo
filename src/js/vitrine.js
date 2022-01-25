class Vitrine {

    static produtosArray = []
    static ul = document.querySelector('.productList')
    

    static criarTemplate({ id, nome, preco, categoria, descricao, imagem }) {

        //Icones
        const wine = "./src/img/wine.svg"
        const fruits = "./src/img/fruits.svg"
        const bread = "./src/img/bread.svg"
        const addToCart = "./src/img/addToCart.svg"

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
        pPrice.innerText        = `RS${preco.toFixed(2)}`
        pDescription.innerText  = descricao
        buttonIMG.src           = addToCart
    
        
        if (categoria === "Panificadora") {
            imgSection.src = bread
        } else if (categoria === "Bebidas") {
            imgSection.src = wine
        } else if (categoria === "Frutas") {
            imgSection.src = fruits
        }

        /* Atribuindo classes aos elementos */
    
        liProduct.classList.add('product')
        divProductHead.classList.add('product--head')
        figure.classList.add('product--figure')
        img.classList.add('product--img')
        divSection.classList.add('product--section')
        h3.classList.add('product--title')
        pDescription.classList.add('product--description')
        divFooter.classList.add('product--footer')
        pPrice.classList.add('product--price')
        button.classList.add('product--addToCart')
    
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
       
        //ACREDITO QUE FALTA ADICIONAR LI NA UL. VERIFICAR ANTES DE TESTAR
    
        return liProduct
    }

    static colocarItensNaVitrine(){
        console.log(Vitrine.ul)
        Vitrine.ul.innerHTML = ""
        Vitrine.produtosArray.forEach(item => {
            const li = Vitrine.criarTemplate(item)
            Vitrine.ul.appendChild(li)
        })
    }

    static pesquisarItens(pesquisa){
        let pesquisaSecao = ['panificadora', 'frutas', 'bebidas']
        let pesquisaArray = []
        if(!pesquisaSecao.includes(pesquisa.toLowerCase())){
            pesquisaArray = Vitrine.produtosArray.filter((prod) => prod.nome.toLowerCase().includes(pesquisa.toLowerCase()))
        }else{
            pesquisaArray = Vitrine.produtosArray.filter((prod) => prod.categoria.toLowerCase() == pesquisa.toLowerCase())
        }
        Vitrine.ul.innerHTML = ""
        pesquisaArray.forEach(item => {
            const li = Vitrine.criarTemplate(item)
            Vitrine.ul.appendChild(li)
        })
    }

}

export { Vitrine }