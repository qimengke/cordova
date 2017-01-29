 myApp.controller('indexCtrl', function($scope, userService) {
     //使用userService提供的服务
     userService.say();
     //ctrl对返回值进行操作
     userService.login({
         userID: '',
         password: '',
         status: 'login'
     }).then(function(e) {
         //promise延迟成功后执行的代码
     }, function(e) {
         //promise延迟失败后执行的代码
     })
 })