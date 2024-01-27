const http = require('http');

const routes = require('./routes');

// Criando um servidor HTTP:

const server = http.createServer((request, response) => {
    // EndPoint: Listando os usuarios da aplicação
    console.log(`Request method: ${request.method} | Endpoint: ${request.url}`);

    const route = routes.find((routeObj) => (
        routeObj.endpoint === request.url && routeObj.method === request.method // Verificando a rota.
    ));

    if(route) {
        route.handler(request, response);
    } else {
        response.writeHead(404, { 'Content-Type': 'text/html' });
        response.end(`Cannot ${request.method} ${request.url}`);
    }

});
// Abrir uma porta para esse servidor:
server.listen(3000, () => console.log('Server started at http://localhost:3000'));