var config     = require('../config')
  , browserify = require('browserify')
  , buffer     = require('vinyl-buffer')
  , merge      = require('merge')
  , source     = require('vinyl-source-stream')
  , watchify   = require('watchify')
  , babelify   = require('babelify');


function bundle ( bundler, gulp, $ ) {
    bundler
      .bundle()
      .pipe( source( config.DIST.js.src ))
      .pipe( buffer() )
      .pipe( $.rename( config.DIST.js.outputFile ))
      .pipe( $.sourcemaps.init({ loadMaps : true }))
      .pipe( $.sourcemaps.write( config.DIST.js.mapDir ))
      .pipe( gulp.dest( config.DIST.js.outputDir ))
      .pipe( $.livereload() );
}

module.exports = function( gulp, $, argv ) {
  return function() {
    var bundler = browserify( config.DIST.js.src ).transform( babelify, { presets : [ 'es2015' ] } );
    bundle( bundler, gulp, $ );
  };
};