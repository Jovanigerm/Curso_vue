// fetch('https://pokeapi.co/api/v2/pokemon')
//     .then(respuesta => respuesta.json())
//     .then(data => {
//         let arrayNombres = []
//         // console.log(data)
//         data.respuesta.array.forEach(element => {
//             // console.log(element.name)
//             arrayNombres.push(element.name)
//         })
//     })
//     .catch(error = console.log(error))
//async await
const obtenerPokemones = async () => {
    try {
        const res = await fetch('https://pokeapi.co/api/v2/pokemon')
        const data = await res.json()
        const arrayNombres = data.respuesta.map(poke => console.log(poke))
        console.log(arrayNombres)
    }
    catch (error) {
        console.log(error)
    }
}
obtenerPokemones