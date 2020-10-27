const { messageBuilder } = require('../helper/linksUtils');

module.exports = {
  links(req, res) {
    const { text } = req.query;
    const msg = messageBuilder(text);
    res.send(msg);
  },
};
