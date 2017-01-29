/**
 * Created by Administrator on 2016/9/23.
 */
angular.module('myApp',['ng.service'])
    .controller("loginCtrl",function($scope,userService,typeProvider,sizeFactory) {
        /*点击登录按钮后 调用service服务*/
        $scope.login = function() {
            userService.login({}).then(function(e) {
                alert('访问成功,但是是否有用户不一定');
            },function(err) {
                alert('访问错误');
            })
        }

        $scope.testProvider = function(){
            sizeFactory.say();
            typeProvider.say();
        }
    })
