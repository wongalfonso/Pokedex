const server = require('./server');
const PORT = process.env.PORT || 3000;

server.listen(() => console.log(`server is listening on ${PORT}`));

