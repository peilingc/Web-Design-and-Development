//For port 5000, needs to run `npm run build` every time when things change then `npm run serve`
//For port 3000, `npm start`

const express = require('express');
const app = express();
const PORT = 5000; 
const facts = require('./src/cat-facts-list.json');

app.use(express.static('./build'));

app.get('/api/catList', (req, res) => {
  //try to make things slow to put a spinner
  setTimeout( () => {
    res.json(facts);
  },3000)
})

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}/`);
});