const http = require('http');
const express = require('express');
const app = express();

http.createServer((request, response) => {
    response.write('Hello World. NodeJS');
    response.end();
})
.listen(3000);

app.get('/', (req, res) => {
    res.send("Express Hello World...");
})
app.listen(3000);

app.get('/products', (req, res) => {
    res.send("Products GET Method ... ");
})

app.put('/products', (req, res) =>{
    res.send("Products POST Method.... ");
})

app.delete('/products', (req, res) => {
    res.send("Products DELETE Method...");
})
                   
app.listen(3000);

// user/7/profile
// user/7/update
// user/7/delete

