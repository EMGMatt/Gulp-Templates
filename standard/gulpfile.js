var $ = require('gulp-load-plugins')();
var gulp = require('gulp');
var browserSync = require('browser-sync').create();

// Serve Task with browserSync
gulp.task('serve', ['sass'], function() {

  browserSync.init({
    server:  "./",
    port: 7510, // Custom Port #
    ui: {
      port: 7511 // Custom UI Port
    }
  });
  gulp.watch('./scss/*.scss', ['sass']);
  gulp.watch('./*.html').on('change', browserSync.reload);
});

// Sass w/ browserSync
gulp.task('sass', function() {
  return gulp.src('./scss/*.scss')
  .pipe($.sass());
  .pipe(gulp.dest('./css'))
  .pipe(browserSync.stream());
});

// Default Task
gulp.task('default', ['serve']);
