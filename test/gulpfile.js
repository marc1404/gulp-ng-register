var gulp = require('gulp');
var ngRequire = require('../gulp-ng-register');

gulp.task('default', function(){
    return gulp.src('app/**/*')
        .pipe(ngRequire())
        .pipe(gulp.dest('app'));
});