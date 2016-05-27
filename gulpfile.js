var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');

// styles Task
gulp.task('styles', function() {
  return gulp.src('src/style.scss')
    .pipe(sass({
      includePaths: ['src/**/*.scss']
    }).on('error', sass.logError))
    .pipe(autoprefixer({
			browsers: ['last 2 versions'],
			cascade: false
		}))
    .pipe(gulp.dest('dist/style'));
});

gulp.task('default', function () {
  gulp.watch('src/*.scss', ['styles']);
});
