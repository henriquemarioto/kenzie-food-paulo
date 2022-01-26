class ApiRestaurante {
    static async buscaImagens() {
        return await fetch('https://kenzie-food-api.herokuapp.com/product', {headers: {Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTEsImlhdCI6MTY0MzExNjkxNiwiZXhwIjoxNjQzOTgwOTE2LCJzdWIiOiJbb2JqZWN0IFVuZGVmaW5lZF0ifQ.KDWjO4BI-xRPROm-D9Inhaix9fJwxlEU5qTyu32kzfU'}})
            .then((response) => response.json())
    }
}

export { ApiRestaurante }