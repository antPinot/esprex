let routes = {};

const esprexApp = (req, res) => {
  routes[req.url] ? routes[req.url](req,res) : res.end('Unrecognized URL')

};

esprexApp.get = (route, callback) => {
  routes[route] = callback
}

module.exports = () => esprexApp;

