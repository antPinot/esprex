let routes = {};

const esprexApp = (req, res) => {
  switch (req.url) {
    case '/':
      routes[req.url](req, res);
      break;
    case '/contact':
      routes[req.url](req,res)
      break;
    default:
      res.end('Unrecognized URL')
      break;
  }
  //res.end('HTTPS');
};

esprexApp.get = (route, callback) => {
  routes[route] = callback
}

module.exports = () => esprexApp;

