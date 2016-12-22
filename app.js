(function() {
  var autoprefixer, axis, css_pipeline, js_pipeline, rupture;

  axis = require('axis');

  rupture = require('rupture');

  autoprefixer = require('autoprefixer-stylus');

  js_pipeline = require('js-pipeline');

  css_pipeline = require('css-pipeline');

  module.exports = {
    ignores: ['readme.md', '**/layout.*', '**/_*', '.gitignore', 'ship.*conf'],
    extensions: [
      js_pipeline({
        files: ['assets/js/vendor/jquery.min.js', 'assets/js/vendor/semantic.js', 'assets/js/vendor/headlines.js', 'assets/js/vendor/jquery.animsition.js', 'assets/js/vendor/cta.js', 'assets/js/*.coffee']
      }), css_pipeline({
        files: ['assets/css/vendor/semantic.css', 'assets/css/vendor/headlines.css', 'assets/css/vendor/animsition.css', 'assets/css/*.styl']
      })
    ],
    stylus: {
      use: [axis(), rupture(), autoprefixer()],
      sourcemap: true
    },
    'coffee-script': {
      sourcemap: true
    },
    jade: {
      pretty: true
    }
  };

}).call(this);
