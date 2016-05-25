var gulp = require('gulp');
var sass = require('gulp-sass');

// styles Task
gulp.task('styles', function() {
  return gulp.src('src/*.scss')
    .pipe(sass({
      includePaths: ['src/**/*.scss']
    }).on('error', sass.logError))
    .pipe(gulp.dest('dist/style.css'));
});

gulp.task('default', function () {
  gulp.watch('src/*.scss', ['styles']);
});
