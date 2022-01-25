class Carrinho {
    static arrProdutosCarrinho = []
    static ul = document.querySelector('.carrinho__produtos')

    static templateProdutoCarrinho({nome, preco, categoria, imagem}){
        const li            = document.createElement('li')
        const imgProduto    = document.createElement('img')
        const div           = document.createElement('div')
        const h2            = document.createElement('h2')
        const span          = document.createElement('span')
        const p             = document.createElement('p')
        const button        = document.createElement('button')
        const imgbutton     = document.createElement('img')

        imgProduto.src = imagem
        h2.innerText = nome
        span.innerText = categoria
        p.innerText = `R$${preco.toFixed(2)}`
        imgbutton.src = '/src/img/trash.svg'

        li.classList.add('produto__card__carrinho')
        div.classList.add('produto__card__info')

        div.appendChild(h2)
        div.appendChild(span)
        div.appendChild(p)
        button.appendChild(imgbutton)
        li.appendChild(imgProduto)
        li.appendChildd(div)
        li.appendChild(button)

        return li
    }

    static preencherCarrinho(){
        Carrinho.ul.innerHTML = ''
        Carrinho.arrProdutosCarrinho.forEach(item => {
            const li = Carrinho.templateProdutoCarrinho(item)
            Carrinho.ul.appendChild(li)
        })
    }
}

export { Carrinho }