var ap = angular.module('ng.service',[]);

/*provide factory*/

//provider 是使用$get进行定义 在注入时自动执行$get
// 注入的对象为$get运行后的返回对象
//provider 是唯一一个可以在程序执行前进行设置的服务
ap.provider('typeProvider',function() {
    this.setUrl = function(str) {
        this.url = str;
    }
    this.$get = function() {
        var that = this;
        var typeO = {}
        typeO.say = function(){
            //this>typeO
            alert('调用方法'+that.url);
        }
        return typeO;
    }
})
//需要配置的服务名称 + Provider
ap.config(function(typeProviderProvider) {
    typeProviderProvider.setUrl('http://www.baidu.com');
})
/*
* 直接定义服务 返回一个对象 > factory内部是执行的$get
* */
ap.factory('sizeFactory',function() {
    var sizeService={};
    sizeService.say = function(){
        alert('1608的同学们,看傻了吧~~~');
    }
    return sizeService;
})

/*
* service定义的是一个构造函数
* 在注入的时候会进行new的初始化
* */
ap.service("userService",function($http,$q) {
    this.baseUrl = 'http://shangpin.duapp.com';
    this.login = function(obj) {
        var q = $q.defer();//创建一个延迟对象
        $http.get(this.baseUrl+'/users/login',{params:obj})
           .then(function(succ){
               //succ:{data headers config status stautsText}
               q.resolve(succ.data);
           },function(err) {
               q.reject(err);
           })
        return q.promise;
    }
})


ap.service("mallService",function($http,$q) {

    this.baseUrl = 'http://shangpin.duapp.com';

    this.login = function(obj) {
        var q = $q.defer();//创建一个延迟对象

        $http.get(this.baseUrl+'/users/login',{params:obj})
            .then(function(succ){
                //succ:{data headers config status stautsText}
                q.resolve(succ.data);
            },function(err) {
                q.reject(err);
            })
        return q.promise;
    }


})

ap.service("typeService",function($http,$q) {
    this.baseUrl = 'http://shangpin.duapp.com';
    this.login = function(obj) {
        var q = $q.defer();//创建一个延迟对象
        $http.get(this.baseUrl+'/users/login',{params:obj})
            .then(function(succ){
                //succ:{data headers config status stautsText}
                q.resolve(succ.data);
            },function(err) {
                q.reject(err);
            })
        return q.promise;
    }
})