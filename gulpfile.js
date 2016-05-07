require('./gulp/styles');
require('./gulp/fonts');
require('./gulp/test');
var gulp = require('gulp');

gulp.task('preview', ['test']);

gulp.task('build', ['fonts', 'sass']);

gulp.task('default', ['build']);
