var gulp = require("gulp");
var browserSync = require("browser-sync");

gulp.task('server', function(){
	browserSync.init({
		server: {
			baseDir: ''
		},
	});
});

gulp.task('watch',function(){
	gulp.watch([
		'html',
		'js/**/*.js',
		'css/**/*.css',
		]).on('change', browserSync.reload);
});
//запуск командой gulp
gulp.task('default',['server', 'watch']);
