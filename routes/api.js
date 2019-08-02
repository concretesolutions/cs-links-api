const { messageBuilder } = require('../helper/utils');
module.exports = {
    links: function(req, res) {
        let text = req.query.text;
        let user = req.query.user_name;
        let msg = messageBuilder(user, text);
        res.send(msg);
    }
};