const express = require('express');
const app = express();
const port = process.env.PORT || 3000;


const users = [
    { id: 0, name: 'alamin', email: 'alamin@gmail.com', phone: '018545464545' },
    { id: 1, name: 'sojib', email: 'sojib@gmail.com', phone: '018545464545' },
    { id: 2, name: 'hamid', email: 'hamid@gmail.com', phone: '018545464545' },
    { id: 3, name: 'nahid', email: 'nahid@gmail.com', phone: '018545464545' },
]


app.get('/', (req, res) => {
    res.send('Hello World my boy. are you reeeeeeeeeeeeeeeeeeeeady?');
});

// Query Search Params
app.get('/users', (req, res) => {
    const search = req.query.search;
    if (search) {
        const searchResult = users.filter(user => user.name.toLowerCase().includes(search));
        res.send(searchResult);
    } else {
        res.send(users);
    }
});

// Dynamic API
app.get('/users/:id', (req, res) => {
    let id = req.params.id;
    let user = users[id];
    res.send(user);
});



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})










