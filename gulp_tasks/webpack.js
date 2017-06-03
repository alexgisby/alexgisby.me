const gulp = require('gulp');
const webpack = require('webpack-stream');

module.exports = (done) => {
    gulp.src('../app/js/client.js')
        .pipe(webpack(require('../webpack.config.js') ))
        .pipe(gulp.dest('./build/js'));
    done();
};
