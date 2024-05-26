// const express = require("express")
// const app = express()

// app.use(express.json());

// app.use(express.urlencoded({ extended: true }))



// let usuarios = [
//     { id: 1, nombre: 'Ryu', edad: 32, lugarProcedencia: 'Japón' },
//     { id: 2, nombre: 'Chun-Li', edad: 29, lugarProcedencia: 'China' },
//     { id: 3, nombre: 'Guile', edad: 35, lugarProcedencia: 'Estados Unidos' },
//     { id: 4, nombre: 'Dhalsim', edad: 45, lugarProcedencia: 'India' },
//     { id: 5, nombre: 'Blanka', edad: 32, lugarProcedencia: 'Brasil' },
// ];

// app.get('/', (req, res) => {

//     res.send(`<h1>Lista personas</h1>
// <ul>
// ${usuarios.map(usuario => `<li>Nombre:${usuario.nombre}   Edad:${usuario.edad}   Procedencia:${usuario.lugarProcedencia}    Id:${usuario.id}</li>`)}
// </ul>
// `)


// })


// app.post('/', (req, res) => {

//     const newUser = {
//         id: usuarios.length + 1,
//         nombre: req.body.nombre,
//         edad: req.body.edad,
//         lugarProcedencia: req.body.lugarProcedencia
//     }

//     usuarios.push((newUser))

//     console.log(newUser)

// })


// app.get('/:i', (req, res) => {

//     const i = req.params;

//     console.log(req.params)
//     const singleUser = usuarios.find((usuario) => usuario.id = i);

//     res.send(`<li>Nombre:${singleUser.nombre}   Edad:${singleUser.edad}   Procedencia:${singleUser.lugarProcedencia}    Id:${singleUser.id}</li>`)

//     console.log(singleUser.nombre)


//     console.log(singleUser)
//     console.log(singleUser.id)



// })



// app.listen(5000, () => {
//     console.log('Servidor escuchando puerto 5000')
// })


const express = require('express');

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

let usuarios = [
    { id: 1, nombre: 'Ryu', edad: 32, lugarProcedencia: 'Japón' },
    { id: 2, nombre: 'Chun-Li', edad: 29, lugarProcedencia: 'China' },
    { id: 3, nombre: 'Guile', edad: 35, lugarProcedencia: 'Estados Unidos' },
    { id: 4, nombre: 'Dhalsim', edad: 45, lugarProcedencia: 'India' },
    { id: 5, nombre: 'Blanka', edad: 32, lugarProcedencia: 'Brasil' },
];

app.get('/usuarios', (req, res) => {
    res.json(usuarios);
    console.log(req.params)
});

app.post('/usuarios', (req, res) => {
    const nuevoUsuario = {
        id: usuarios.length + 1,
        nombre: req.body.nombre,
        edad: req.body.edad,
        lugarProcedencia: req.body.lugarProcedencia
    };

    res.send(nuevoUsuario)
    usuarios.push(nuevoUsuario);

});

app.get('/usuarios/:nombre', (req, res) => {
    const nombre = req.params.nombre;
    console.log(req.params)
    const usuario = usuarios.find(u => u.nombre === nombre);

    if (!usuario) {
        res.status(404).json({ mensaje: 'Usuario no encontrado' });
    } else {
        res.json(usuario);
    }
});

app.put('/usuarios/:nombre', (req, res) => {
    const nombre = req.params.nombre;
    const usuarioIndex = usuarios.findIndex(u => u.nombre === nombre);

    if (usuarioIndex === -1) {
        res.status(404).json({ mensaje: 'Usuario no encontrado' });
    } else {
        usuarios[usuarioIndex].edad = req.body.edad;
        usuarios[usuarioIndex].lugarProcedencia = req.body.lugarProcedencia;
        res.json(usuarios[usuarioIndex]);
    }
});

app.delete('/usuarios/:nombre', (req, res) => {
    const nombre = req.params.nombre;

    const usuario = usuarios.find(u => u.nombre === nombre)

    if (!usuario) {
        res.status(404).json({ mensaje: 'Usuario no encontrado' });

    } else {

        usuarios = usuarios.filter(u => u.nombre !== nombre);
        res.json({ mensaje: 'Usuario eliminado correctamente' });
    }
});

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});