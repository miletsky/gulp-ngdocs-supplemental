var gulp = require('gulp');
var browserSync = require('browser-sync');
var reload = browserSync.reload;

gulp.task('serve', function () {
  browserSync({
    notify: false,
    port: 9000,
    server: {
      baseDir: ['./sample', './dist'],
      routes: {'/bower_components': 'bower_components'}
    }
  });
  gulp.watch([
    './dist/**/*',
    './sample/**/*'
  ]).on('change', reload);
});
