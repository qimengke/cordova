define(['app'],function(app) {

	app.controller('mallCtrl',function($scope,$http) {

		$http.post('http://shangpin.duapp.com/size/save',{
			s_name:'增加尺寸',
			s_content:'尺寸测试'
		}

		)

		$scope.userName = "天下123";
	})
})