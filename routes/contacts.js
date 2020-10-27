const { messageBuilder } = require('../helper/contactsUtils');

module.exports = {
  contacts(req, res) {
    const { text } = req.query;
    const contact = messageBuilder(text);
    res.send(contact);
  },
};
