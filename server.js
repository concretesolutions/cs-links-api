const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const {links} = require('./routes/links');
const {contatos} = require('./routes/contatos');
app.listen(port, () => {
  console.log('Server running on port ' + port);
});

app.get('/links', links);
app.get('/contatos', contatos);
