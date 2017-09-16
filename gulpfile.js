var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
 
// Lint JavaScript
gulp.task('lint', function () {
  return gulp.src('index.js')
    .pipe($.jshint())
    .pipe($.jshint.reporter('jshint-stylish'))
});
