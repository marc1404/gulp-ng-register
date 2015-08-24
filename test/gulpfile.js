var gulp = require('gulp');
var ngRequire = require('../lib/gulp-ng-register');

gulp.task('default', function(){
    return gulp.src('app/**/*')
        .pipe(ngRequire())
        .pipe(gulp.dest('app'));
});

gulp.task('empty', function(){
    return gulp.src('empty/**/*')
        .pipe(ngRequire())
        .pipe(gulp.dest('empty'));
});