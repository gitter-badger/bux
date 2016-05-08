var gulp = require('gulp');
var config = require('./config');
var plugins = require('gulp-load-plugins')();
var browser = require('browser-sync');
var reload = browser.reload;

gulp.task('styles:test', ['sass:lint'], function () {
    return gulp.src(config.assets.bux)
        .pipe(plugins.print())
        .pipe(plugins.plumber())
        .pipe(plugins.sourcemaps.init())
        .pipe(plugins.sass.sync({
            outputStyle: 'expanded',
            precision: 10,
            includePaths: ['.']
        }).on('error', plugins.sass.logError))
        .pipe(plugins.autoprefixer({browsers: ['> 1%', 'last 2 versions', 'Firefox ESR']}))
        .pipe(plugins.sourcemaps.write())
        .pipe(gulp.dest(config.dist.styles))
        .pipe(reload({stream: true}));
});

gulp.task('sass:lint', function () {
    return gulp.src(config.assets.styles + '/**/*.scss')
        .pipe(plugins.scssLint());
});

gulp.task('sass', ['sass:lint']);
