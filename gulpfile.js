var gulp = require('gulp'),
    wiredep = require('wiredep').stream,
    jshint = require('gulp-jshint'),
    connect = require('gulp-connect'),
    sass = require('gulp-sass');

gulp.task('default', ['wiredep', 'jsLint', 'sass', 'serve'], function() {
  // place code for your default task here
});

gulp.task('wiredep', function () {
  gulp.src('app/*.html')
    .pipe(wiredep({
      directory: 'bower_components'
    }))
    .pipe(gulp.dest('app'));
});

gulp.task('jsLint', function () {
    gulp.src('app/scripts/{,*/}*.js') // path to your files
    .pipe(jshint())
    .pipe(jshint.reporter()); // Dump results
});

gulp.task('sass', function () {
    gulp.src('app/styles/scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('app/styles'));
});

gulp.task('serve', function() {
  connect.server();
});