const express = require('express')
const cors = require('cors')
const app = express()

var mockResponseCollection = { id: 1, name: 'C1', discs:[ { id: 1, name: 'D1'}, { id:2, name: 'D2'} ] };
var mockResposeSearch = {"q":"query","entity":"","page":1,"per_page":10,"discs":{"total":1,"result":[{"id":2,"name":"D2"}]},"collections":{"total":1,"result":[{"id":1,"name":"C1","discs":[{"id":1,"name":"C1"},{"id":2,"name":"C2"},{"id":3,"name":"C3"},{"id":4,"name":"C4"}]}]}};

app.use(cors())

app.get('/meta', (req, res) => res.send( { name: "Disc0!", version:"0.0.0"  } ));
app.get('/collection/*', (req, res) => res.send( mockResponseCollection ));

app.get('/search', (req, res) => res.send(mockResposeSearch));

app.listen(3000, () => console.log('Example app listening on port 3000!'))