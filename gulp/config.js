module.exports = {

  SERVER: {
    root: './dist'
  },

  DIST: {
    css: {
      outputDir: './dist/public/css',
      outputFile: 'style.css'
    },
    js: {
      src: './src/js/App.js',
      mapDir: './maps/',
      outputDir: './dist/public/js',
      outputFile: 'app.js'
    },
    ejs: {
      outputDir: './dist'
    }
  }

};