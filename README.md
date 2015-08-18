# gulp-ng-register
[![npm](https://img.shields.io/npm/v/gulp-ng-register.svg?style=flat-square)](https://www.npmjs.com/package/ng-register)
[![Travis](https://img.shields.io/travis/marc1404/gulp-ng-register.svg?style=flat-square)](https://travis-ci.org/marc1404/ng-register)
[![Code Climate](https://img.shields.io/codeclimate/github/marc1404/gulp-ng-register.svg?style=flat-square)](https://codeclimate.com/github/marc1404/ng-register)
[![Code Climate](https://img.shields.io/codeclimate/coverage/github/marc1404/gulp-ng-register.svg?style=flat-square)](https://codeclimate.com/github/marc1404/ng-register/coverage)
[![npm](https://img.shields.io/npm/l/gulp-ng-register.svg?style=flat-square)](https://github.com/marc1404/ng-register/blob/master/LICENSE)
[![npm](https://img.shields.io/npm/dm/gulp-ng-register.svg?style=flat-square)](https://www.npmjs.com/package/ng-register)

[![David](https://img.shields.io/david/marc1404/gulp-ng-register.svg?style=flat-square)](https://github.com/marc1404/ng-register/blob/master/package.json)
[![David](https://img.shields.io/david/dev/marc1404/gulp-ng-register.svg?style=flat-square)](https://github.com/marc1404/ng-register/blob/master/package.json)

## Installation
```
$ npm install gulp-ng-register
```
  
## Description
This [gulp](https://www.npmjs.com/package/gulp) plugin can be used to automatically require and register Angular controller, directive and service modules.  
All files provided by ```gulp.src()``` will be required and registered in your Angular app.
Modules are required to export a ```name``` property and one of the following:  
- ```controller```
- ```directive```
- ```service```

It will generate a ```register.js``` file at the provided location by ```gulp.dest()```.  
Require this file from your Angular app:  
```javascript
var app = angular.module('MyApp', []);

require('./register')(app);
```

## Usage
```javascript
var gulp = require('gulp');
var ngRegister = require('gulp-ng-register');

gulp.task('register', function(){
  return gulp.src('app/client/**/*.{controller,directive,service}.js')
    .pipe(ngRegister())
    .pipe(gulp.dest('/app/client'));
});
```
  
## Options
You can pass a file name to ```ngRegister()``` if you want.

## Test
```
$ npm install -g mocha  
$ mocha
```
  
## Author
[marc1404](https://github.com/marc1404)

## License
[MIT](https://github.com/marc1404/gulp-ng-register/blob/master/LICENSE)
