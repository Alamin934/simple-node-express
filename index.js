const express = require('express');
const cors = require('cors');
const app = express();
const port = 8800;


app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('WOW, I am learning node js from today automatic');
})

const users = [
    { id: 0, name: 'alamin', email: 'alamin@gmail.com', phone: '018545464545' },
    { id: 1, name: 'sojib', email: 'sojib@gmail.com', phone: '018545464545' },
    { id: 2, name: 'hamid', email: 'hamid@gmail.com', phone: '018545464545' },
    { id: 3, name: 'nahid', email: 'nahid@gmail.com', phone: '018545464545' },
]

app.get('/users', (req, res) => {
    const search = req.query.search;
    //use query parameter
    if (search) {
        const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes(search));
        res.send(searchResult)
    } else {
        res.send(users)

    }
});
/* app method */
app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser);
    console.log('hitting Post', req.body);
    // res.send(JSON.stringify(newUser))
    res.json(newUser);
});

/* dynamic api */
app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const userId = users[id];
    res.send(userId);
})

app.listen(port, () => {
    console.log('listening at', port);
})