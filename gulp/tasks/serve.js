var config = require('../config');

module.exports = function( gulp, $, argv ) {

  return function() {
    $.connect.server({
        root: config.SERVER.root,
        livereload: true
    });
  };
};