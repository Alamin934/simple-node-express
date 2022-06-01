const express = require('express');
const app = express();
const port = process.env.PORT || 3000;


app.get('/', (req, res) => {
    res.send('Hello World');
});


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})









// const users = [
//     { id: 0, name: 'alamin', email: 'alamin@gmail.com', phone: '018545464545' },
//     { id: 1, name: 'sojib', email: 'sojib@gmail.com', phone: '018545464545' },
//     { id: 2, name: 'hamid', email: 'hamid@gmail.com', phone: '018545464545' },
//     { id: 3, name: 'nahid', email: 'nahid@gmail.com', phone: '018545464545' },
// ]

