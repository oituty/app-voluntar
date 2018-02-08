angular.module('starter.controllers', [])

//Controller DASH
.controller('DashCtrl', function($scope, $ionicModal, appBankService, $state) { 

    $scope.ongs;

      //Função Get da rota Ongs vindo do Service
      appBankService.getOngs()
      .then(function mySuccess(response) { 
        $scope.ongs = response.data;  
        console.log($scope.ongs);  
        }, 
        function myError(err) {
        console.log(err);
        });
        
        //MODAL
        $ionicModal.fromTemplateUrl('templates/modal.html', {
          scope: $scope,
          animation: 'slide-in-down'
        }).then(function(modal) {
          $scope.modal = modal;
        });

      // Tentar redirecionar da ONG que achou na pesquisa para a tela de mensagens.
        $scope.entrarMensagem = () => {
          $state.go('tab.chats')
        };

})
//Controller LOGIN
.controller('LoginCtrl', function($scope, $state, appBankService, setLoginService) {
        
            //Função Get da rota Voluntarios vindo do Service
            $scope.voluntarios;
            appBankService.getVoluntarios()
            .then(function mySuccess(response) { 
              $scope.voluntarios = response.data;
          }, 
          function myError(err) {
            console.log(err);
          });
          
          

        $scope.fazerLogin = (usuario, senha) => {
        for (let voluntario of $scope.voluntarios) {
          if( (usuario == voluntario.usuario) && (senha == voluntario.senha) ){
            setLoginService.setVoluntario(voluntario);
            $state.go('tab.dash');
          }
          
        }
         
      
          
        } 
})
//Controller CHATS
.controller('ChatsCtrl', function($scope, Chats, appBankService) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
    $scope.ongs;

    //Função Get da rota Ongs vindo do Service
    appBankService.getOngs()
    .then(function mySuccess(response) { 
      $scope.ongs = response.data;  
      console.log($scope.ongs);  
      }, 
      function myError(err) {
      console.log(err);
      });
  };
})
//Controller CHAT
.controller('ChatDetailCtrl', function($scope, $stateParams, Chats,appBankService) {
  $scope.chat = Chats.get($stateParams.chatId);
  $scope.mandarMensagem = (texto) => {
    $scope.mensagem = texto;
  }
})




//Controller ACCOUNT
.controller('AccountCtrl', function($scope, setLoginService) {
 $scope.usuarioLogado =  setLoginService.getVoluntario();
  console.log($scope.usuarioLogado);
  
});