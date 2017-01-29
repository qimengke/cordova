define(['angularAMD','uiRoute'],function(angularAMD) {

	var app = angular.module('myApp',['ui.router']);
	/*路由规则*/
	app.config(["$stateProvider","$urlRouterProvider","$httpProvider",function($state,$url,$httpProvider) {
		$httpProvider.defaults.headers.post = {"Content-Type":"application/x-www-form-urlencoded"};


		$state.state('home',{
			url:'/home',
			templateUrl:"views/home.html"
		}).state('home.user',{
			url:'/user',
			views:{
				"main":{
					templateUrl:'views/template/userTemplate.html',
					controller:'userCtrl',
					resolve:{ //可以为ctrl注入 
							suiyi:function($q){
								var q = $q.defer();
								require(['public/js/controller/userCtrl.js'],function() {
									q.resolve();
								})
								return q.promise;
						}
					}
				}
			}
		}).state('home.mall',{
			views:{
				"main":{
					templateUrl:'views/template/mallTemplate.html',
					controller:'mallCtrl',
					resolve:{ //可以为ctrl注入 
							suiyi:function($q){ //承诺延迟
								var q = $q.defer();
								//require加载模块 (只会加载一次) 
								require(['public/js/controller/mallCtrl.js'],function() {
									q.resolve();
								})
								return q.promise;
						}
					}
				}
			}
		}).state('home.power',{
			views:{
				"main":{
					templateUrl:'views/template/powerTemplate.html',
					controller:'powerCtrl'
				}
			}
		})
		$url.otherwise('/home')
	}])
	//返回一个可以模块加载的angularjs
	return angularAMD.bootstrap(app);
})