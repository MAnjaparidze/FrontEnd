const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello');
})

//()
app.get('/users/:userId(\\d)', (req, res) => {
    const userId = req.params.userId;
    res.send(`user id - ${userId}`);
});

// Query String
app.get('/products', (req, res) => {
    res.send(`
    <h1>Welcome</h1>
    <h2>${req.query.name} ${req.query.lastname}</h2>`);
})

app.listen(3000);
// localhost:3000/users/5?
// localhost:3000/products?name=Apple