import { Vitrine } from "./vitrine.js"

class Carrinho {
    static ul = document.querySelector('.carrinho__produtos')

    static templateProdutoCarrinho({nome, preco, categoria, imagem}, index){
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

        li.setAttribute('index', index)

        div.appendChild(h2)
        div.appendChild(span)
        div.appendChild(p)
        button.appendChild(imgbutton)
        li.appendChild(imgProduto)
        li.appendChild(div)
        li.appendChild(button)

        return li
    }

    static adicionarAoCarrinho(evt){
        if(evt.target.tagName === 'BUTTON'){
            const item = Vitrine.produtosArray.find(item => item.nome === evt.target.closest('li').querySelector('.product--title').innerText)

            if(Carrinho.pegarArrProdutos() === null || Carrinho.pegarArrProdutos() === 'null'){
                window.localStorage.setItem('arrProdutosCarrinho', JSON.stringify([item]))
            }
            else{
                const arrProdutos = Carrinho.pegarArrProdutos()
                window.localStorage.setItem('arrProdutosCarrinho', JSON.stringify([...arrProdutos, item]))
            }
            
            Carrinho.preencherCarrinho()
        }
    }

    static preencherCarrinho(){
        if(Carrinho.pegarArrProdutos() !== null){
            Carrinho.ul.innerHTML = ''
            Carrinho.pegarArrProdutos().forEach((item, index) => {
                const li = Carrinho.templateProdutoCarrinho(item, index)
                Carrinho.ul.appendChild(li)
            })
            Carrinho.carrinhoVazioOuNao()
            
        }
        Carrinho.atualizaValores()
        
    }

    static removeItemCarrinho(event){
        if(event.target.tagName === 'BUTTON'){
            const li = event.target.closest('li')
            const index = li.getAttribute('index')
            const arrProdutos = Carrinho.pegarArrProdutos()

            arrProdutos.splice(index, 1)
            
            window.localStorage.setItem('arrProdutosCarrinho', JSON.stringify(arrProdutos))
        }
        Carrinho.preencherCarrinho()
    }

    static carrinhoVazioOuNao(){
        if(Carrinho.pegarArrProdutos().length !== 0){
            document.querySelector('.carrinho__div__carrinho__vazio').classList.add('hidden')
            document.querySelector('.carrinho__div__valores').classList.remove('hidden')
        }
        else{
            document.querySelector('.carrinho__div__carrinho__vazio').classList.remove('hidden')
            document.querySelector('.carrinho__div__valores').classList.add('hidden')
        }
    }

    static atualizaValores(){
        const quantidade = document.querySelector('#quantidade')
        const total = document.querySelector('#total')
        
        quantidade.innerText = Carrinho.pegarArrProdutos().length
        total.innerText = `R$${Carrinho.pegarArrProdutos().reduce((acc, item) => acc + item.preco,0).toFixed(2)}`
    }

    static pegarArrProdutos(){
        return JSON.parse(window.localStorage.getItem('arrProdutosCarrinho'))
    }
}

export { Carrinho }