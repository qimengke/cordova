/**
 * Created by Administrator on 2016/9/22.
 */
var ngfilter = angular.module('ng.filter',[]);
ngfilter.filter('nameFormat',function() {
    return function(val) {
        return '格式:'+val;
    }
})

ngfilter.filter('timeFormat',function() {
    return function(time,timeformatStr) {
        return '格式:'+val;
    }
})