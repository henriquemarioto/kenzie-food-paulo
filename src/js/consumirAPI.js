class ApiRestaurante {
    static async buscaImagens() {
        return await fetch('https://kenzie-food-api.herokuapp.com/product')
            .then((response) => response.json())
    }
}

export { ApiRestaurante }