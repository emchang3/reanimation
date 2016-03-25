var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');
var watch = require('gulp-watch');
var uglify = require('gulp-uglify');

// This code allows gulp to watch my files so I don't have to break workflow to
// run gulp.
watch(['./source/*.js'], function() {
  console.log("App has been modified; re-compiling.");
  gulp.start('default');
});

// I didn't actually use any ES6. I copied this from a boilerplate.
gulp.task('default', function() {
  return browserify('./source/app.js')
        .transform("babelify", {presets: ["es2015", "react"]})
        .bundle()
        .pipe(source('build.js'))
        .pipe(gulp.dest('./build/'))
});
