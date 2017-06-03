const gulp = require('gulp');
const sass = require('gulp-sass');
const gutil = require('gulp-util');
const flatten = require('gulp-flatten');

module.exports = (done) => {
    gulp.src([__dirname+'/../scss/*.scss'])
        .pipe(flatten())
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(gulp.dest(__dirname + '/../public/assets'));
    done();
};
