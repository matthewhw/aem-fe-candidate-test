var gulp = require('gulp'),
    wiredep = require('wiredep').stream,
    jshint = require('gulp-jshint'),
    connect = require('gulp-connect');

gulp.task('default', function() {
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

gulp.task('serve', function() {
  connect.server();
});