const express = require('express');
const path    = require('path');
const app     = express();

app.use(  express.static( path.join(__dirname, 'public') ) );
app.use( express.static( path.join(__dirname, '/node_modules/jquery')));
app.use( express.urlencoded({ extended: true }));

let PORT = process.env.PORT || 3000;

app.get('/', (req,res) =>{
    res.sendFile(path.join(__dirname, '/public', 'exercise_1.html'));
})

app.get('/add', (req, res) => {
    
})

app.listen(PORT, () => {
    console.log(`PORT - ${PORT}`);
})