const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTEsImlhdCI6MTY0MzExNjkxNiwiZXhwIjoxNjQzOTgwOTE2LCJzdWIiOiJbb2JqZWN0IFVuZGVmaW5lZF0ifQ.KDWjO4BI-xRPROm-D9Inhaix9fJwxlEU5qTyu32kzfU"


/* GET */
async function getAPIArray() {
    return fetch('https://kenzie-food-api.herokuapp.com/my/product', {
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-type": "application/json; charset=UTF-8"
        },
        method: 'get',
        
    })
    .then(res => res.json())
        
}


/* GET */
const getAllProducts = document.querySelector('.getAllProducts')
const resultGet = document.querySelector('.todosProdutos')
getAllProducts.addEventListener('click', preencherGet)

const todosProdutos = document.querySelector('.todosProdutos')
todosProdutos.addEventListener('click', handlerEvent)

/* POST */
const postSubmit = document.querySelector('.postButton')
postSubmit.addEventListener("click", getPostInput)

/* PATCH */
const patchSubmit = document.querySelector('.patchButton')
patchSubmit.addEventListener("click", getPatchInput)

/* Handler */
async function handlerEvent(evt){
    if(evt.target.tagName === 'BUTTON'){
        if(evt.target.innerText === 'Alterar'){
            sendToPatch(evt)
        }

        if(evt.target.innerText === 'Delete'){      
            deleteProduct(evt.target.closest('li').querySelector('#id').innerText)
        }

    }
}

async function sendToPatch(evt){
    const li = evt.target.closest('li')

    const id = li.querySelector('#id')
    const nome = li.querySelector('#nome')
    const preco = li.querySelector('#preco')
    const categoria = li.querySelector('#categoria')
    const descricao = li.querySelector('#descricao')
    const imagem = li.querySelector('#imagem')

    document.querySelector('#patchIdNumber').value = id.innerText
    document.querySelector('#patchNome').value = nome.innerText
    document.querySelector('#patchPreco').value = preco.innerText
    document.querySelector('#patchCategoria').value = categoria.innerText 
    document.querySelector('#patchDescricao').value = descricao.innerText
    document.querySelector('#patchLinkIMG').value = imagem.innerText

    window.scrollTo({top: document.querySelector('.patch').getBoundingClientRect().bottom, behavior: 'smooth',})
}


async function preencherGet() {
    let resultArray = await getAPIArray()
    
    const patchUl = document.querySelector('.get ul')
    patchUl.innerHTML = ''

    for (let index = 0; index < resultArray.length; index++) {
        
        const li = document.createElement('li')
        const id = document.createElement('p')
        const nome = document.createElement('p')
        const preco = document.createElement('p')
        const categoria = document.createElement('p')
        const descricao = document.createElement('p')
        const imagem = document.createElement('p')
        const buttonAlterar = document.createElement('button')
        const buttonDelete = document.createElement('button')
        const hr = document.createElement('hr')

        id.setAttribute('id', 'id')
        nome.setAttribute('id', 'nome')
        preco.setAttribute('id', 'preco')
        categoria.setAttribute('id', 'categoria')
        descricao.setAttribute('id', 'descricao')
        imagem.setAttribute('id', 'imagem')

        id.innerText = resultArray[index].id
        nome.innerText = resultArray[index].nome
        preco.innerText = resultArray[index].preco
        categoria.innerText = resultArray[index].categoria
        descricao.innerText = resultArray[index].descricao
        imagem.innerText = resultArray[index].imagem
        buttonAlterar.innerText = 'Alterar'
        buttonDelete.innerText = 'Delete'

        li.appendChild(hr)
        li.appendChild(id)
        li.appendChild(nome)
        li.appendChild(preco)
        li.appendChild(categoria)
        li.appendChild(descricao)
        li.appendChild(imagem)
        li.appendChild(buttonAlterar)
        li.appendChild(buttonDelete)
        
        patchUl.appendChild(li)

    }

}

preencherGet()

/* POST */
async function getPostInput() {

    const name = document.getElementById('postNome')
    const preco = document.getElementById('postPreco')
    const linkIMG = document.getElementById('postLinkIMG')
    const descricao = document.getElementById('postDescricao')
    const categoria = document.getElementById('postCategoria')

    let obj = {
        "nome": `${name.value}`,
        "preco": `${Number(preco.value) > 0 ? Number(preco.value) : 0}`,
        "categoria": `${categoria.value}`,
        "imagem": `${linkIMG.value}`,
        "descricao": `${descricao.value}`
    }



    let a = await fetch('https://kenzie-food-api.herokuapp.com/my/product', {
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-type": "application/json; charset=UTF-8"
            },
            method: 'post',
            body: JSON.stringify(obj)
        })
        .then(res => res.json())
    
    preencherGet()
}

/* PATCH */
async function getPatchInput() {
    const patchid = document.getElementById('patchIdNumber')
    const patchName = document.getElementById('patchNome')
    const patchPreco = document.getElementById('patchPreco')
    const patchCategoria = document.getElementById('patchCategoria')
    const patchDescricao = document.getElementById('patchDescricao')
    const patchLink = document.getElementById('patchLinkIMG')

    let obj = {
        "nome": `${patchName.value}`,
        "preco": Number(patchPreco.value) > 0 ? Number(patchPreco.value) : 0,
        "categoria": `${patchCategoria.value}`,
        "imagem": `${patchLink.value}`,
        "descricao": `${patchDescricao.value}`
    }
    
    console.log(obj)

    let res = await fetch(`https://kenzie-food-api.herokuapp.com/my/product/${patchid.value}`, {
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-type": "application/json; charset=UTF-8",
        },
        method: 'PATCH',
        body: JSON.stringify(obj)
    }).then(res => res.json())

    console.log(res)

    patchid.value = ''
    patchName.value = ''
    patchPreco.value = ''
    patchCategoria.value = ''
    patchDescricao.value = ''
    patchLink.value = ''

    preencherGet()
}


/* DELETE */
async function deleteProduct(id) {

    let a = await fetch(`https://kenzie-food-api.herokuapp.com/my/product/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-type": "application/json; charset=UTF-8"
            },
            method: 'delete',
        })
        .then(res => res.json())
    
    console.log(a)

    preencherGet()
}