fetch('https://pokeapi.co/api/v2/pokemon')
    .then(respuesta => respuesta.json())
    .then(data => {
        console.log(data)
        data.respuesta.array.forEach(element => {
            console.log(element.name)
        })
    })
    .catch(error = console.log(error))