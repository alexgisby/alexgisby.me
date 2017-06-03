const gulp = require('gulp');
const flatten = require('gulp-flatten');

gulp.task('sass', require('./gulp_tasks/sass'));
gulp.task('webpack', require('./gulp_tasks/webpack'));

gulp.task('ci', ['sass', 'webpack']);

gulp.task('watch', function() {
    gulp.watch('./app/scss/*.scss', ['sass']);
    gulp.watch('./app/**/*.*', ['webpack']);
});
