const express = require('express');
const cote = require('cote');

const app = express();

const client = new cote.Requester({ name: 'Client' });

app.get("/allclass", (req, res) => {
    client.send({ type: 'allKlass' }, data => {
        console.log("socket all Class---->", data)
        res.status(200).json(data);
    })
})

app.get("/class", (req, res) => {
    client.send({ type: 'Klass' }, data => {
        console.log("socket Class---->", data)
        res.status(10000).json(data);
    })
})
    
setInterval(() => {
    client.send({ type: 'Klass' }, data => {
        console.log("socket Class---->", data)
    })
},10)

app.listen(3000)