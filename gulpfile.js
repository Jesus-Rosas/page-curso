'use strict'
/*
  Dependencias
**/
let gulp = require('gulp');
let uglify = require('gulp-uglify');
let sass = require('gulp-sass');
/*Configuracion de las primeras tareas*/

gulp.task('sass', function(){
  gulp.src('src/scss/*.scss')
      .pipe(sass.sync().on('error', sass.logError))
      .pipe(sass({outputStyle: 'compressed'}))
      .pipe(gulp.dest('build/css/'));
});

gulp.task('sass:watch', function(){
  gulp.watch('src/scss/*.scss', ['sass']);
});

gulp.task('js', function(){
  gulp.src('src/js/script.js')
      .pipe(uglify())
      .pipe(gulp.dest('build/js/'));
});

gulp.task('js:watch', function(){
  gulp.watch('src/js/*.js', ['js']);
});

gulp.task('default', ['sass:watch', 'js:watch'])
