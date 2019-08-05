const {messageBuilder} = require('../helper/utils');
module.exports = {
  links: function(req, res) {
    const text = req.query.text;
    const user = req.query.user_name;
    const msg = messageBuilder(user, text);
    res.send(msg);
  },
};
