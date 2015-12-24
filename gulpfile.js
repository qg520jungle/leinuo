var gulp = require('gulp');
var less = require('gulp-less');
var path = require('path');
var browserSync = require('browser-sync');
var clean = require('gulp-clean');
var changed = require('gulp-changed');
var LessPluginCleanCSS = require('less-plugin-clean-css'),
	LessPluginAutoPrefix = require('less-plugin-autoprefix'),
	cleancss = new LessPluginCleanCSS({
		advanced: true
	}),
	autoprefix = new LessPluginAutoPrefix({
		browsers: ["last 2 versions"]
	});
/* ------------ FILE PATH ------------ */
var filePath = {};
filePath.src = './src';
filePath.tmp = './.tmp/';
filePath.page = ['./*.html'];
filePath.js = ['./res/*.js'];
filePath.css = ['./res/*.css'];
filePath.less = ['./src/*.less'];
filePath.img = ['./res/icons/*.jpg', './res/icons/*.png'];


gulp.task('less', function() {
	return gulp.src(filePath.less)
		.pipe(less({
			plugins: [autoprefix, cleancss]
		}))
		.pipe(gulp.dest('./res/'));
});

gulp.task('serve', ['less'],function() {
	browserSync({
		server: {
			baseDir: "./",
			directory: true
		}
	});
	var _tmpArr = [].concat(filePath.page, filePath.less, filePath.css, filePath.js, filePath.img);
	gulp.watch(_tmpArr).on('change', function() {
		gulp.start('reload');
	});
});
gulp.task('watch',function(){
	gulp.watch(filePath.less,['serve']);
})



gulp.task('reload', function() {
	browserSync.reload();
});
gulp.task('default', ['serve','watch']);