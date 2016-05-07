var gulp = require('gulp');
var config = require('./gulp/config');
var plugins = require('gulp-load-plugins')();
var browser = require('browser-sync');
var reload = browser.reload;

gulp.task('sass', function () {
    return gulp.src('assets/styles/bux.scss')
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
        .pipe(gulp.dest('.tmp/styles'))
        .pipe(reload({stream: true}));
});

gulp.task('styles', ['sass'], function () {
    return gulp.src('.tmp/styles/*.css')
        .pipe(plugins.print())
        //.pipe(plugins.cssnano())
        .pipe(gulp.dest('dist/styles'));
});

gulp.task('html', ['styles'], function () {
    return gulp.src('test/*.html')
        .pipe(gulp.dest('dist'));
});

gulp.task('fonts', function () {
    return gulp.src(['./fe_assets/google-open-sans/open-sans/*.*', './fe_assets/bootstrap-sass/assets/fonts/*.*'])
        .pipe(plugins.print())
        .pipe(gulp.dest('dist/fonts'));
});

gulp.task('serve', ['build'], function () {
    browser({
        notify: false,
        port: 9000,
        server: {
            baseDir: './dist'
        }
    });

    gulp.watch([
        'test/*.html',
        '.tmp/fonts/**/*'
    ]).on('change', reload);

    gulp.watch('assets/styles/**/*.scss', ['sass']);
    gulp.watch('assets/fonts/**/*', ['fonts']);
});

gulp.task('build', ['html', 'fonts'], function () {
    return gulp.src('dist/**/*').pipe(plugins.size({title: 'build', gzip: true}));
});
gulp.task('default', ['build']);
