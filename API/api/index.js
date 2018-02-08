const app = require('./index-config');

//importação do Controller
const usuariosController = require('./controllers/usuariosCtrl.js');



// Endpoints / Rotas Voluntários
app.get('/api/voluntarios', usuariosController.listarUsuarios);
app.get('/api/voluntarios/:id', usuariosController.listarUsuario);
app.post('/api/voluntarios', usuariosController.criarUsuario);
app.put('/api/voluntarios/:id', usuariosController.atualizarUsuario);
app.delete('/api/voluntarios/:id', usuariosController.deletarUsuario);



// Endpoints / Rotas Ongs
app.get('/api/ongs', usuariosController.listarOngs);
app.get('/api/ongs/:id', usuariosController.listarOng);
app.post('/api/ongs', usuariosController.criarOng);
app.put('/api/ongs/:id', usuariosController.atualizarOng);
app.delete('/api/ongs/:id', usuariosController.deletarOng);