const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
const db = require('./db.json');

server.use(middlewares);
server.use(router);

server.use(jsonServer.rewriter({
  '/api/website/news': '/news'
}));
server.use(jsonServer.rewriter({
  '/api/website/home': '/home'
}));
server.use(jsonServer.rewriter({
  '/api/website/forecasts': '/forecasts'
}));
server.use(jsonServer.rewriter({
  '/api/lightnings/state': '/state'
}));

server.use(jsonServer.rewriter({
  '/api/lightnings/brazil-dat': '/brazil-dat'
}));


server.listen(process.env.PORT || 5000, () => {
  console.log('🚀️ JSON server is running 🚀️');
});

