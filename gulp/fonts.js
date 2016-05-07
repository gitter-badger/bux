var gulp = require('gulp');
var config = require('./config');
var plugins = require('gulp-load-plugins')();

gulp.task('fonts:clean', function () {
    return gulp.src(config.assets.fonts)
        .pipe(plugins.clean());
});

gulp.task('fonts', ['fonts:clean'], function () {
    return gulp.src([config.feassets.fonts.opensans, config.feassets.fonts.opensans])
        .pipe(plugins.print())
        .pipe(gulp.dest(config.assets.fonts));
});

gulp.task('fonts:test', ['fonts'], function () {
    return gulp.src(config.assets.fonts)
        .pipe(gulp.dest(config.dist.fonts));
});
