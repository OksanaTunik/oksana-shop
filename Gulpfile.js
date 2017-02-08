var gulp = require('gulp');
var babel = require('gulp-babel');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var cleanCss = require('gulp-clean-css');
var bower = require('gulp-bower');
var pump = require('pump');

gulp.task('bundle_js', function () {
  pump([
    gulp.src(['src/js/**/*.js']),
    concat('bundle.js'),
    babel({ presets: ['es2015'] }),
    uglify(),
    gulp.dest('build')
  ]);
});

gulp.task('bundle_css', function () {
  pump([
    gulp.src(['src/css/**/*.css']),
    concat('bundle.css'),
    cleanCss(),
    gulp.dest('build')
  ]);
});

gulp.task('templates', function () {
  pump([
    gulp.src(['src/**/*.html']),
    gulp.dest('build')
  ]);
});

gulp.task('images', function () {
  pump([
    gulp.src(['src/img/*']),
    gulp.dest('build/img')
  ]);
});

gulp.task('bower', function () {
  return bower();
});

gulp.task('build', ['bundle_js', 'bundle_css', 'templates', 'images', 'bower'], function () {
});

gulp.task('watch', function () {
  gulp.watch('src/js/**/*', ['bundle_js']);
  gulp.watch('src/css/**/*', ['bundle_css']);
  gulp.watch('src/*.html', ['templates']);
  gulp.watch('src/img/**/*', ['images']);
  gulp.watch('bower.json', ['bower']);
});

gulp.task('default', ['build']);
