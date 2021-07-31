'use strict';
const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.static('./public'));
const item = require('./public/item');
let id = 3;


app.get('/item/', (req, res) => {
    res.json(item);
});

app.get('/item/:name', (req, res) => {
    const name = req.params.name;
    Object.keys(item).forEach(key => {
        if (item[key].name === name){
            res.json(item[key]);
            return;
        }
    });
    res.status(404).json({ error: `Unknown item`});
  });

app.post('/item/:name', (req, res) => {
    const name = req.params.name;
    if(!name) {
      res.status(400).json({ error: 'missing-item' }); 
      return;
    }

    let duplicate = false;
    Object.keys(item).forEach(key => {
        if (item[key].name === name){
            duplicate = true;
            res.status(409).json({ error: 'duplicate' });
            return;
        }
    });
    
    if (duplicate == false){
        id++;
        item[id] = {
            itemId: id,
            name: name,
            quantity: 0,
        };
        res.json(item);
    }
    
});
  
app.delete('/item/:id', (req, res) => {
    const id = req.params.id;
    if(!id) {
      res.status(400).json({ error: 'missing-item' });
      return;
    }

    Object.keys(item).forEach(key => {
        if (key === id){
            delete item[key];
            return;
        }
    });
    res.json(item);
});

app.put('/item/:id', express.json(), (req, res) => {
    const id = req.params.id;
    if(!id) {
      res.status(400).json({ error: 'missing-item' });
      return;
    }

    if (req.body.change === "increase"){
        Object.keys(item).forEach(key => {
            if (key === id){
                item[key].quantity ++;
                return;
            }
        });
    }
    else {
        Object.keys(item).forEach(key => {
            if (key === id){
                item[key].quantity --;
                return;
            }
        });
    }
    res.json(item);
});


app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));