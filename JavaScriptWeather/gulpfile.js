'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('default', defaultTask);

function defaultTask(done) {
    done();
}

gulp.task('sass', function() {
    return gulp.src('src/scss/style.scss')
    .pipe(sass())
    .pipe(gulp.dest('./'))
});

gulp.task('watch', gulp.series('sass', function() { 
	gulp.watch('src/scss/**/*.scss').on('change', gulp.parallel('sass'));
}));

	gulp.task('default'['watch', 'sass']);