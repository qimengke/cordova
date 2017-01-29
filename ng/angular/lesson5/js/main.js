/**
 * Created by Administrator on 2016/9/23.
 */
var app = angular.module('myApp',['ui.router']);

app.config(function($stateProvider,$urlRouterProvider) {
    $stateProvider.state("home",{ //路由名称 随意的
        url:'/index',//虚拟的 不是真实存在
        views:{//多视图
            "left":{
                templateUrl:"views/left.html"
            },
            "right":{
                templateUrl:"views/right.html"
            }
        }
    })
    $urlRouterProvider.otherwise('/index');
})