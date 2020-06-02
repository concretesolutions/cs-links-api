const {messageBuilder} = require('../helper/contactsUtils');

module.exports = {
  contacts: function(req, res) {
    const text = req.query.text;
    const contact = messageBuilder(text);
    res.send(contact);
  },
};
