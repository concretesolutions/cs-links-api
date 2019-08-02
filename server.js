const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

const api = require('./routes/api');
app.listen(port, () => {
 console.log("Server running on port 3000");
});

app.get("/links", api.links);