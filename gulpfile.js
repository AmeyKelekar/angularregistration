var gulp = require('gulp'),
	gutil = require('gulp-util'),
  	webserver = require('gulp-webserver');

gulp.task('js', function() {
	gulp.src('angularregistration/js/**/*');
});

gulp.task('css' ,function(){
	gulp.src('angularregistration/css/*.css');
});

gulp.task('html', function(){
	gulp.src('angularregistration/*.html');
});

gulp.task('watch', function(){
	gulp.watch('angularregistration/js/**/*',['js']);
	gulp.watch('angularregistration/css/*.css',['css']);
	gulp.watch(['angularregistration/*.html',
		'angularregistration/views/*.html'],['html']);
});

gulp.task('webserver', function(){
	gulp.src('angularregistration/')
		.pipe(webserver({
			livereload : true,
			open : true
		}));
});

gulp.task('default', ['watch', 'html', 'js', 'css', 'webserver']);