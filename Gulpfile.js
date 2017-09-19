var gulp = require('gulp');
var connect = require('gulp-connect');
var sass = require('gulp-sass');

gulp.task('webserver', function() {
  connect.server({
    livereload: true,
    port: 8081
  });
});

gulp.task('sass', function() {
    gulp.src('scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css/'))
        .pipe(connect.reload())
});

gulp.task('watch', function() {
    gulp.watch('scss/**/*.scss', ['sass']);
})
 
gulp.task('default', ['sass', 'webserver', 'watch']);