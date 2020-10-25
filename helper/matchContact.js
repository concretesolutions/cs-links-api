class MatchContact {
    constructor(keyword, list, env) {
      this.keyword = keyword;
      this.list = list;
      this.env = env;
    }
    unmappedKeyword() {
      const contacts = Object.entries(this.list)
        .map(contact => contact[1].action)
        .join("\n")
        .replace(/,/g,':');
      return `Essa key word não está mapeada,\nmas seguem todos os ${this.env} que tempos mapeados no momento\n${contacts}`;
    }
    mappedKeyword() {
      const match = Object.entries(this.list)
        .find(contact => this.keyword.match(contact[1].regex));
      return match[1].action;
    }
  }

  module.exports = function contactSelector(keyword, list, env) {
    const matchCont = new MatchContact(keyword, list, env);

    if (!keyword || keyword.match(/^todos$/)) {
    return matchCont.unmappedKeyword();  
    } else {
    return matchCont.mappedKeyword();
    }
  }