var config = require('../config');

module.exports = function( gulp, $, argv ) {

  return function() {
    gulp.src('./src/sass/**/*.scss')
        .pipe( $.sourcemaps.init() )
        .pipe( $.sass().on( 'error', $.sass.logError ))
        .pipe( $.autoprefixer({
          browsers: ['last 2 versions'],
          cascade: false
        }))
        .pipe( $.sourcemaps.write() )
        .pipe( $.rename( config.DIST.css.outputFile ))
        .pipe( gulp.dest( config.DIST.css.outputDir ))
        .pipe( $.livereload() );
  };
};