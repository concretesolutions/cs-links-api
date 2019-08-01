var express = require("express");
var app = express();
var port = process.env.PORT || 3000;
app.listen(port, () => {
 console.log("Server running on port 3000");
});

app.get("/links", (req, res, next) => {
    switch(req.query.text) {
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