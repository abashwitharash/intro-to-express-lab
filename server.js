const express = require('express')

const app = express();
// 1. Be polite. Greet the User
app.get('/greetings/:username', (req, res) => {
    res.send(`<h1>Hello ${req.params.username}</h1>`);
    // res.send(`<h2>What a delight it is to see you ${req.params.username} </h2>`)
});

// 2. Rolling the Dice
app.get('/roll/:number', (req, res) => {
    const num = Math.ceil(Math.random() * req.params.number);

    if (!num && num === 0) {
        res.send(`you must specificy a number`);
    } else { 
        res.send(`you rolled a ${num}`)

    }

});

//3 I want THAT one!

const collectibles = [
    { name: 'shiny ball', price: 5.95 },
    { name: 'autographed picture of a dog', price: 10 },
    { name: 'vintage 1970s yogurt SOLD AS-IS', price: 0.99 }
];

app.get('/collectibles/:index', (req, res) => {
    const item = collectibles[req.params.index];

    if (!item) { 
        res.send("This item is not yet in stock. Check back soon!");
    } else {
        res.send(`So you want the ${item.name}? For ${item.price}, it can be yours!`);
    }
});

app.listen(3000, () => {
    console.log('listening on port 3000')
});


