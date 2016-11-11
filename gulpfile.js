'use strict';

 const gulp       = require('gulp')
     , argv       = require('yargs').argv
     , plugins    = require('gulp-load-plugins')();

function get( task ) {
  return require( './gulp/tasks/' + task )( gulp, plugins, argv ); 
}

gulp.task( 'sass', get('sass') );
gulp.task( 'bundle', get('bundle') );
gulp.task( 'ejs', get('ejs') );

gulp.task( 'watch', get('watch') );
gulp.task( 'serve', get('serve') );

// [-] TODO: create a build task...
// [-] TODO: create a image optimization task...

gulp.task('default', ['serve', 'watch']);