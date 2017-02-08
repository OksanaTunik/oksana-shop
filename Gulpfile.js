var gulp = require('gulp');
var babel = require('gulp-babel');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var cleanCss = require('gulp-clean-css');
var pump = require('pump');

gulp.task('bundle_js', function () {
  pump([
    gulp.src(['js/**/*.js']),
    concat('bundle.js'),
    babel({ presets: ['es2015'] }),
    //uglify(),
    gulp.dest('build')
  ]);
});

gulp.task('bundle_css', function () {
  pump([
    gulp.src(['css/**/*.css']),
    concat('bundle.css'),
    cleanCss(),
    gulp.dest('build')
  ]);
});

gulp.task('default', ['bundle_js', 'bundle_css'], function () {
});
