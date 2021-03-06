"use strict";

var gulp = require('gulp'),
  jshint = require('gulp-jshint'),
  webserver = require('gulp-webserver');

gulp.task('jshint', function() {
  return gulp.src('./js/**/*.js')
    .pipe(jshint('./.jshintrc'))
    .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('watch', function() {
  gulp.watch('./js/**/*.js', ['jshint']);
});

gulp.task('webserver', function() {
  gulp.src('./')
    .pipe(webserver({
      livereload: true,
      open: true
    }));
});

gulp.task('default', ['jshint', 'webserver', 'watch']);
