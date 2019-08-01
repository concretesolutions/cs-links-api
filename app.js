var express = require("express");
var app = express();
app.listen(3000, () => {
 console.log("Server running on port 3000");
});

app.get("/links", (req, res, next) => {
    switch(req.query.q) {
        case 'guia':
            res.send("https://blog.accenture.com/concrete/");
            break;
        case 'valores':
            res.send('https://blog.accenture.com/concrete/2018/08/01/valores/');
            break;
        default:
            res.send('https://portal.accenture.com');
            break;
    }

   });