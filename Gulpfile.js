var gulp = require('gulp');
var babel = require('gulp-babel');
var browserify = require('gulp-browserify');
var rename = require('gulp-rename');
var minify = require('gulp-minify');

gulp.task('bundle_js', function () {
  return gulp.src(['js/index.js'])
    .pipe(browserify({ insertGlobals : true }))
    .pipe(rename('bundle.js'))
    .pipe(gulp.dest('build'));
});

gulp.task('es6_to_es5', ['bundle_js'], function () {
  return gulp.src(['build/bundle.js'])
    .pipe(babel({ presets: ['es2015'] }))
    .pipe(gulp.dest('build'));
});

gulp.task('minify_js', ['es6_to_es5'], function () {
  return gulp.src('build/bundle.js')
    .pipe(minify({}))
    .pipe(gulp.dest('build'));
});

gulp.task('default', ['minify_js'], function () {
});
