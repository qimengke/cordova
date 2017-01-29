var gulp = require('gulp');

gulp.task('bowerjs',function() {
	gulp.src(['./bower_components/angular/*.js','./bower_components/angular-ui-router/release/*.js','./bower_components/angularAMD/*.js','./bower_components/requirejs/require.js'])
	.pipe(gulp.dest('./public/js/angular'))
});