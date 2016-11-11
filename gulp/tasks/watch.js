var config = require('../config');

module.exports = function( gulp, $, argv ) {

  return function() {
    $.livereload.listen();
    gulp.watch('./src/sass/**/*.scss', ['sass']);
    gulp.watch('./src/views/**/*.ejs', ['ejs']);
    gulp.watch('./src/js/**/*.js', ['bundle']);
  };
};