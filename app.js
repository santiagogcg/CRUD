const express = require("express")
const app = express()

app.use(express.json());

app.use(express.urlencoded({ extended: true }))



let usuarios = [
    { id: 1, nombre: 'Ryu', edad: 32, lugarProcedencia: 'Japón' },
    { id: 2, nombre: 'Chun-Li', edad: 29, lugarProcedencia: 'China' },
    { id: 3, nombre: 'Guile', edad: 35, lugarProcedencia: 'Estados Unidos' },
    { id: 4, nombre: 'Dhalsim', edad: 45, lugarProcedencia: 'India' },
    { id: 5, nombre: 'Blanka', edad: 32, lugarProcedencia: 'Brasil' },
];

app.get('/', (req, res) => {

    res.send(`<h1>Lista personas</h1>
<ul>
${usuarios.map(usuario => `<li>Nombre:${usuario.nombre}   Edad:${usuario.edad}   Procedencia:${usuario.lugarProcedencia}    Id:${usuario.id}</li>`)}
</ul>
`)


})


app.post('/', (req, res) => {

    const newUser = {
        id: usuarios.length + 1,
        nombre: req.body.nombre,
        edad: req.body.edad,
        lugarProcedencia: req.body.lugarProcedencia
    }

    usuarios.push((newUser))

    console.log(newUser)

})


app.get('/:i', (req, res) => {

    const i = req.params;

    console.log(req.params)
    const singleUser = usuarios.find((usuario) => usuario.id = i);

    res.send(`<li>Nombre:${singleUser.nombre}   Edad:${singleUser.edad}   Procedencia:${singleUser.lugarProcedencia}    Id:${singleUser.id}</li>`)

    console.log(singleUser.nombre)


    console.log(singleUser)
    console.log(singleUser.id)








})








app.listen(5000, () => {
    console.log('Servidor escuchando puerto 5000')
})
