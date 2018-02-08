angular.module('starter.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Ben Sparrow',
    lastText: 'You on your way?',
    face: 'img/ben.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me',
    face: 'img/max.png'
  }, {
    id: 2,
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
    face: 'img/adam.jpg'
  }, {
    id: 3,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: 'img/perry.png'
  }, {
    id: 4,
    name: 'Mike Harrington',
    lastText: 'This is wicked good ice cream.',
    face: 'img/mike.png'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
})
//Service GET do BANCO DE DADOS
.service('appBankService', function($http) {
  
  let rotas = {};

// Voluntarios

  rotas.getVoluntarios = () => {
      return $http.get('http://localhost:5000/api/voluntarios');
     
  };
    
// Ongs

  rotas.getOngs = () => {
    return $http.get('http://localhost:5000/api/ongs');
  };
    
  return rotas;
})

.service('setLoginService', function() {
  
  let servico = {};
  
  //objeto UsuarioDefinido criado como Vazio.
 let usuarioDefinido = {};

  //criado a função que é passado o voluntario logado para usuarioDefinido
  servico.setVoluntario = (voluntario) => {
    usuarioDefinido = voluntario;
  }

    //criado a função que é passado o usuario definido
  servico.getVoluntario = () => {
  
   return usuarioDefinido;
  }

  return servico;
});
