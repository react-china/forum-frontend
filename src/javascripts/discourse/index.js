const apis = require('./apis.json').apis;

class Discourse {
  constructor(url, apiKey, apiUsername) {
    this.url = url;
    this.api_key = apiKey;
    this.api_username = apiUsername;

    apis.forEach((name) => {
      const api = require(`./lib/${name}`);

      Object.keys(api)
        .filter(key => typeof api[key] === 'function')
        .forEach((key) => api[key] = api[key].bind(this));

      Object.assign(Discourse.prototype, {[name]: api});
    });
  }
}

export default Discourse;
