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

/* POST */
const postSubmit = document.querySelector('.postButton')
postSubmit.addEventListener("click", getPostInput)

/* PATCH */
const patchSubmit = document.querySelector('.patchButton')
patchSubmit.addEventListener("click", getPatchInput)

/* DELETE */
const deleteSubmit = document.querySelector('.deleteButton')
deleteSubmit.addEventListener("click", getDeleteInput)


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
        const button = document.createElement('button')
        const hr = document.createElement('hr')

        id.innerText = resultArray[index].id
        nome.innerText = resultArray[index].nome
        preco.innerText = resultArray[index].preco
        categoria.innerText = resultArray[index].categoria
        descricao.innerText = resultArray[index].descricao
        imagem.innerText = resultArray[index].imagem
        button.innerText = 'Enviar'

        id.setAttribute('disable', 'disable')

        li.appendChild(hr)
        li.appendChild(id)
        li.appendChild(nome)
        li.appendChild(preco)
        li.appendChild(categoria)
        li.appendChild(descricao)
        li.appendChild(imagem)
        li.appendChild(button)
        
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
        "preco": `${Number(patchPreco.value) > 0 ? Number(patchPreco.value) : 0}`,
        "categoria": `${patchCategoria.value}`,
        "imagem": `${patchDescricao.value}`,
        "descricao": `${patchLink.value}`
    }
    
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
}


/* DELETE */
async function getDeleteInput() {
    const id = document.getElementById('deleteIdNumber')

    let a = await fetch(`https://kenzie-food-api.herokuapp.com/my/product/${id.value}`, {
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-type": "application/json; charset=UTF-8"
            },
            method: 'delete',
        })
        .then(res => console.log(res))
    
    console.log(a)

    id.value = ''
}