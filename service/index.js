const cote = require('cote');

const Klass = new cote.Responder({ name: 'Klass' });

Klass.on('Klass', (req, cb) => {
    console.log("hello")
    cb({resp: "hello"});
});

Klass.on('allKlass', (req, cb) => {
    cb({resp: "todas las clases"});
});

Klass.on('makeK', (req, cb) => {
    cb({resp: req.nombre});
});