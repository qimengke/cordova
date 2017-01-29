/**
 * Created by Administrator on 2016/9/22.
 */
/*定义servcie服务*/
var app = angular.module('ng.service',[]);
//provide factory  service
/*service 在使用的时候会进行初始化 创建一个全新的对象
* 所以内部一般使用this定义变量和函数
* */
app.service("userService",function($http,$q) {
    var loginUrl = 'http://datainfo.duapp.com/shopdata/userinfo.php';
    //编写ajax
    this.login = function(obj) {
        //定义承诺对象>angular的服务
        var q = $q.defer();
        //调用ajax获取对应的数据
        $http.get(loginUrl,{params:obj}).then(
            function(success) {
                //如果程序成功 给承诺对象返回success
                q.resolve(success);
        },function(error){
                //如果程序失败 给承诺对象返回reject
                q.reject(error);
        })
        //返回承诺对象
        return q.promise;
    }

    this.say = function(){
        alert(123);
    }
})