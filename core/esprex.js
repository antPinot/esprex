//let routes = {route:{}};

let routes = {}

const esprexApp = (req, res) => {
  if (routes[req.url] && (routes[req.url]).has(req.method)) {
    routes[req.url].get(req.method)(req,res)
  } else {
    res.end('Unrecognized URL')
  }
};

/*esprexApp.all = (route, callback, method) => {
  if (!routes[route]){
    routes[route] = new Map([[method, callback]])
  }else{
    route.set(method, callback)
  }
}*/

esprexApp.get = (route, callback) => {
  routes[route] = {'GET' : callback}
}

esprexApp.post = (route, callback) => {
  routes[route] = {'POST' : callback}
  console.log(routes[route])
}

/*esprexApp.get = (route, callback) => {
  esprexApp.all(route, callback, 'GET')
}

esprexApp.post = (route, callback) => {
  esprexApp.all(route, callback, 'POST')
}

esprexApp.put = (route, callback) => {
  esprexApp.all(route, callback, 'PUT')
}

esprexApp.delete = (route, callback) => {
  esprexApp.all(route, callback, 'DELETE')
}*/

module.exports = () => esprexApp;

