var gulp = require('gulp');
var browserify = require('browserify');
var babelfy = require('babelify');
var source = require('vinyl-source-stream');

gulp.task('browserify', function () {
    return browserify('./js/app.js')
        .transform(browserify, {stage: 0})
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(gulp.dest('js'))
});
gulp.task('watch', function () {
   gulp.watch('**/*.js', ['broswerify']);
});

