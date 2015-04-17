'use strict';

var gulp = require('gulp'),
  browserSync = require('browser-sync'),
  reload      = browserSync.reload;

var dist = 'uikit/dist/';
var uikitCSS	= [dist+'css/uikit.blogsfam.css'];

var html	= '../*.html';
var css = '../css/*.css';

gulp.task('default', ['watch']);

gulp.task('watch', function() {
	browserSync({
		server: {
			baseDir: "../"
		}
	});
	gulp.watch(uikitCSS, ['copy-uikit-dist']);
	gulp.watch(html).on('change', reload);
	gulp.watch(css).on('change', reload);
});

gulp.task('copy-uikit-dist', function(done) {
	// place code for your default task here
	gulp.src(uikitCSS)
	  .pipe(gulp.dest('../css/'));
	return done();
});
