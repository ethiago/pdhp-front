const express = require('express')
const cors = require('cors')
const app = express()

var mockResponseCollection = { id: 1, name: 'collection', discs:[ { id: 1, name: 'D1'}, { id:2, name: 'D2'} ] };

app.use(cors())

app.get('/meta', (req, res) => res.send( { name: "Disc0!", version:"0.0.0"  } ));
app.get('/collection/*', (req, res) => res.send( mockResponseCollection ));

app.listen(3000, () => console.log('Example app listening on port 3000!'))