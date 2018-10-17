const express = require('express');
const path = require('path');
const multer = require('multer');
const mCache = require('memory-cache');

const app = express();
const PORT = process.env.PORT || 3000;


//put(key,value,time,timeoutCallback)
//get(key)

mCache.put('super-cache', 'wow', 300, function (key, value) {
    console.log(`Key -  ${key}, Value - ${value}`);
})

console.log(`Super Cache - ${mCache.get('super-cache')}`);

setTimeout(() => {
    console.log(`Super Cache 500ms- ${mCache.get('super-cache')}`);
}, 500)

app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'pug');
app.set('views', './public/views');

const multerConfig = multer({
    dest: 'public/uploads'
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/public', 'upload.html'));
});

// multi-part/form-data
app.post('/', multerConfig.single(''), (req, res) => {
    const userName = req.body.username;
    const imgUrl = path.join('uploads', req.image.filename);
    res.render('index', { imgUrl });
});

app.get('/cache', cachePage(4), (req, res) => {
    setTimeout(() => {
        const date = new Date();
        let time = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds}`;
        res.render('cached', { time });
    }, 3000)
});

const cachePage = (duration) => {
    return (req, res, next) => {

        let key = `__cached__${req.originalUrl} || req.url}`;
        let pageBody = mCache.get(key);

        if (pageBody) {
            res.send(pageBody);
        }
        else {
            res.sendResponse = res.send;
            res.send = (body) => {
                mCache.put(key, body, duration * 1000);
                res.sendResponse(body)
            }
            next();
        }
    }
}

app.listen(PORT, () => {
    console.log(`Locked and Loaded!`);
})