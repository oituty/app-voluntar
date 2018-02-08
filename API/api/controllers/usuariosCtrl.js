const ObjectID = require('mongodb').ObjectID;

//------------Usuarios-------------


// Função para listar todos os meus usuários que estão no banco de dados na coleção 'usuários'
exports.listarUsuarios = (req, res) => {
    req.db.collection('usuarios').find().toArray((err, result) => {
        if(err){
            res.send(err);
            console.log(`Não foi possível encontrar os usuários no banco de dados`);
        }
        else{
            res.send(result);
            console.log(`Todos os usuários salvos no banco de dados foram listados`);
        }
    });
}


// Função para listar um usuario por id, da coleção 'usuários'
exports.listarUsuario = (req, res) => {
    let id = req.params.id;

    req.db.collection('usuarios').find({"_id": ObjectID(id)}).toArray((err, result) => {
        if(err){
            res.send(err);
            console.log(`Não foi possível encontrar o usuário do Registro: "${id}"`);
        }
        else{
            res.send(result);
            console.log(`O usuário salvo no banco de dados no Registro: "${id}" foi Encontrado com Sucesso`);
        }
    });
}


// Função para criar os usuarios na minha coleção 'usuarios'
exports.criarUsuario = (req, res) => {
    req.db.collection('usuarios').insert(req.body, (err, result) => {
        if(err){
            res.send(err);
            console.log(`Não foi possível criar o Usuário`);
        }
        else{
            res.send(`O usuário foi criado com Sucesso`);
        }
    });
}


// Função para atualizar os usuarios na minha coleção 'usuarios'
exports.atualizarUsuario = (req, res) => {
    let id = req.params.id;

    req.db.collection('usuarios').update({"_id": ObjectID(id)}, req.body, (err, result) => {
        if(err){
            res.send(err);
            console.log(`Não foi possível atualizar o Usuário do Registro "${id}"`);
        }
        else{
            res.sendStatus(200);
            console.log(` O Usuário salvo no Banco de Dados do Registro "${id}" foi atualizado com Sucesso`);
        }
    });
}


// Função para deletar os usuarios na minha coleção 'usuarios'
exports.deletarUsuario = (req, res) => {
    let id = req.params.id;

    req.db.collection('usuarios').remove({"_id": ObjectID(id)}, (err, result) => {
        if(err){
            res.send(err);
            console.log(`Não foi possivel excoluir o usuário do Registro "${id}" `);
        }
        else{
            res.sendStatus(200);
            console.log(`O Usuário salvo no Banco de Dados do Registro "${id}" foi deletado com Sucesso`);
            
        }
    });
}


//------------Ongs------------


// Função para listar todos os meus usuários que estão no banco de dados na coleção 'ongUsuários'
exports.listarOngs = (req, res) => {
    req.db.collection('ongUsuarios').find().toArray((err, result) => {
        if(err){
            res.send(err);
            console.log(`Não foi possível encontrar os usuários no banco de dados`);
        }
        else{
            res.send(result);
            console.log(`Todos os usuários salvos no banco de dados foram listados`);
        }
    });
}


// Função para listar um usuario por id, da coleção 'ongUsuarios'
exports.listarOng = (req, res) => {
    let id = req.params.id;

    req.db.collection('ongUsuarios').find({"_id": ObjectID(id)}).toArray((err, result) => {
        if(err){
            res.send(err);
            console.log(`Não foi possível encontrar o usuário do Registro: "${id}"`);
        }
        else{
            res.send(result);
            console.log(`O usuário salvo no banco de dados no Registro: "${id}" foi Encontrado com Sucesso`);
        }
    });
}


// Função para criar os usuarios na minha coleção 'ongUsuarios'
exports.criarOng = (req, res) => {
    req.db.collection('ongUsuarios').insert(req.body, (err, result) => {
        if(err){
            res.send(err);
            console.log(`Não foi possível criar o Usuário`);
        }
        else{
            res.sendStatus(201);
            console.log(`O usuário foi criado com Sucesso`);
        }
    });
}


// Função para criar os usuarios na minha coleção 'ongUsuarios'
exports.atualizarOng = (req, res) => {
    let id = req.params.id;

    req.db.collection('ongUsuarios').update({"_id": ObjectID(id)}, req.body, (err, result) => {
        if(err){
            res.send(err);
            console.log(`Não foi possível atualizar o Usuário do Registro "${id}"`);
        }
        else{
            res.sendStatus(200);
            console.log(` O Usuário salvo no Banco de Dados do Registro "${id}" foi atualizado com Sucesso`);
        }
    });
}


// Função para deletar os usuarios na minha coleção 'ongUsuarios'
exports.deletarOng = (req, res) => {
    let id = req.params.id;

    req.db.collection('ongUsuarios').remove({"_id": ObjectID(id)}, (err, result) => {
        if(err){
            res.send(err);
            console.log(`Não foi possivel excoluir o usuário do Registro "${id}" `);
        }
        else{
            res.sendStatus(200);
            console.log(`O Usuário salvo no Banco de Dados do Registro "${id}" foi deletado com Sucesso`);
            
        }
    });
}