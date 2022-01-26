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

const variavelGlobal = await getAPIArray()


/* GET */
const getAllProducts = document.querySelector('.getAllProducts')
const resultGet = document.querySelector('.todosProdutos')
getAllProducts.addEventListener('click', getAPIArray)

/* POST */
const postSubmit = document.querySelector('.postButton')
postSubmit.addEventListener("click", getPostInput)

/* PATCH */
const patchSubmit = document.querySelector('.patchButton')
patchSubmit.addEventListener("click", getPatchInput)

/* DELETE */
const deleteSubmit = document.querySelector('.deleteButton')
deleteSubmit.addEventListener("click", getDeleteInput)


function preencherPatch() {
    
    console.log(variavelGlobal)
    const patchUl = document.querySelector('.patch ul')

    for (let index = 0; index < variavelGlobal.length; index++) {
        
        const li = document.createElement('li')
        const id = document.createElement('input')
        const nome = document.createElement('input')
        const preco = document.createElement('input')
        const categoria = document.createElement('input')
        const descricao = document.createElement('input')
        const imagem = document.createElement('input')

        id.value = variavelGlobal[index].id
        nome.value = variavelGlobal[index].nome
        preco.value = variavelGlobal[index].preco
        categoria.value = variavelGlobal[index].categoria
        descricao.value = variavelGlobal[index].descricao
        imagem.value = variavelGlobal[index].imagem

        li.appendChild(id)
        li.appendChild(nome)
        li.appendChild(preco)
        li.appendChild(categoria)
        li.appendChild(descricao)
        li.appendChild(imagem)

    }

}

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
    getFullArray()
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

    console.log(obj)


    let a = await fetch(`https://kenzie-food-api.herokuapp.com/my/product/${patchid.value}`, {
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-type": "application/json; charset=UTF-8",
            'Access-Control-Allow-Origin': `https://kenzie-food-api.herokuapp.com/my/product/${patchid.value}`
        },
        method: 'PATCH',
        body: JSON.stringify(obj)
    })
    getFullArray()
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
    getFullArray()
}