const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

const { links } = require('./routes/links');
const { contacts } = require('./routes/contacts');

app.listen(port, () => {
  console.log(`Server running on port ${port}`); // eslint-disable-line no-console
});

app.get('/links', links);
app.get('/contatos', contacts);
