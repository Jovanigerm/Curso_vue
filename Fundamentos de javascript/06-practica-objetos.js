const web = {
    nombre : 'blueeweb',
    links : {
        enlace: 'ww.blue.cl'
    },
    redesSociales : {
        youtube : {
            enlace : 'youtube.com/blue',
            nombre : 'blue yt'
        }
    }
}
console.log(web.redesSociales.youtube.enlace)
const enlaceYT = web.redesSociales.youtube.enlace
console.log(enlaceYT)

const {enlace,nombre} = web.redesSociales.youtube
console.log(enlace)
console.log(nombre)