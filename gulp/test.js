var gulp = require('gulp');
var fonts = require('./fonts');
var styles = require('./styles');
var browser = require('browser-sync');
var reload = browser.reload;
var config = require('./config');

gulp.task('html', function () {
    return gulp.src(config.test + '/*.html')
        .pipe(gulp.dest('dist'))
        .on('end', reload);
});

gulp.task('test', ['fonts:test', 'styles:test', 'html'], function () {
    console.log('running server');
    
    browser({
        notify: false,
        port: 9000,
        server: {
            baseDir: config.dist.root
        }
    });

    gulp.watch('test/*.html', ['html']);
    gulp.watch('assets/styles/**/*.scss', ['styles:test']);
    gulp.watch('assets/fonts/**/*.*', ['fonts:test']);
});
