// Aqui nos teremos um crud de usuarios que são :
/*
C : Create : Criar um usuario.
R : Read : pegar todos os dados dos usuarios.
U : Update : Atualizar os usuarios.
D : Delet : Remover um usuario
*/
const users = require('../mocks/users');
module.exports = {
    listUsers(request, response) {
        response.writeHead(200, { 'Content-Type': 'application/json' });
        response.end(JSON.stringify(users));
    },
};

