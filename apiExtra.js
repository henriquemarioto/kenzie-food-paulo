// console.log(await fetch('https://kenzie-food-api.herokuapp.com/my/product', {headers: {Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTEsImlhdCI6MTY0MzExNjkxNiwiZXhwIjoxNjQzOTgwOTE2LCJzdWIiOiJbb2JqZWN0IFVuZGVmaW5lZF0ifQ.KDWjO4BI-xRPROm-D9Inhaix9fJwxlEU5qTyu32kzfU"}})
//                         .then(res => res.json()))

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTEsImlhdCI6MTY0MzExNjkxNiwiZXhwIjoxNjQzOTgwOTE2LCJzdWIiOiJbb2JqZWN0IFVuZGVmaW5lZF0ifQ.KDWjO4BI-xRPROm-D9Inhaix9fJwxlEU5qTyu32kzfU"

// let obj = {
// 	"nome": "Bolinho",
// 	"preco": 5,
// 	"categoria": "Doce",
// 	"imagem": "https://picsum.photos/200/300",
// 	"descricao" : "Lorem ipsum"
//     }
// console.log(await fetch('https://kenzie-food-api.herokuapp.com/my/product', { headers: {Authorization: "Bearer ", "Content-type": "application/json; charset=UTF-8"}, method: 'post', body: JSON.stringify(obj)})
//         .then(res => res.json()))

const postSubmit = document.querySelector('.postButton')
postSubmit.addEventListener("click", getPostInput)


async function getPostInput() {

    const name = document.getElementById('nome')
    const preco = document.getElementById('preco')
    const categoria = document.getElementById('categoria')
    const linkIMG = document.getElementById('linkIMG')
    const descricao = document.getElementById('descricao')

    let obj = {
        "nome": `${name.value}`,
        "preco": `${Number(preco.value)}`,
        "categoria": `${categoria.value}`,
        "imagem": `${linkIMG.value}`,
        "descricao": `${descricao.value}`
    }

    console.log(obj)
    let a = await fetch('https://kenzie-food-api.herokuapp.com/my/product', {
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-type": "application/json; charset=UTF-8"
        },
        method: 'post',
        body: JSON.stringify(obj)
    })
    .then(res => res.json())
    console.log(a)
}