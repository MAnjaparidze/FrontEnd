const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();

const PORT = 3000;


app.use(cookieParser("cipher"));
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.cookie("username", "Mamuka Anjaparidze");
    res.cookie('cart', { items: [1, 2, 3] });
    // expire: Date.now() + 6000
    res.cookie("forever", "Forever Value", { expire: Date.now() + 6000 });

    res.cookie('signed', "random text", { signed: true });

    res.send("Hello")
})

app.get('/cookies', (req, res) => {
    res.write(`<h1>Username - ${req.cookies.username}</h1>`);
    res.write(`<h1>Forever - ${req.cookies.forever}</h1>`);
    res.write(`<h1>Cart - ${req.cookies.cart.items.join(' ')}</h1>`);
    res.write(`<h1>Signed - ${req.signedCookies['signed']}</h1>`);
    res.end();
})

app.listen(PORT, () => {
    console.log(`Server PORT - ${PORT}`);
})

