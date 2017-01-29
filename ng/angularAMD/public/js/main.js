require.config({
	baseUrl:'public/js',
	paths:{
		angular:'angular/angular',
		uiRoute:'angular/angular-ui-router',
		angularAMD:'angular/angularAMD'
	},
	shim:{
		'uiRoute':['angular'],
		'angularAMD':['angular']
	},
	deps:['app']
})

