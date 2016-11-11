var config = require('../config');

module.exports = function( gulp, $, argv ) {

  return function() {
    gulp.src('./src/views/index.ejs')
        .pipe( $.ejs({}, {ext:'.html'}))
        .pipe( gulp.dest( config.DIST.ejs.outputDir ) )
        .pipe( $.livereload() );
  };
};