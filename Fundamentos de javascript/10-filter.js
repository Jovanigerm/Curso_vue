const obtenerPokemones = async () => {
    try {
        const res = await fetch('https://pokeapi.co/api/v2/pokemon')
        const data = await res.json()
        const arrayNombres = data.respuesta.filter(poke => console.log(poke.name === 'bulbasaur'))
        console.log(arrayNombres)
    }
    catch (error) {
        console.log(error)
    }
}
obtenerPokemones