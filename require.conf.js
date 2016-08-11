define(function(){
  requirejs.onError = function (err) {
      console.log('Catched by require on toplevel - You have to handle/catch theses errors for production !!!');
      console.log('Require call type :', err.requireType);
      if (err.requireType === 'timeout') {
          console.log('modules: ' + err.requireModules);
      }
      console.log(err);
  };
  require.config({
    "baseUrl":".",
    "waitSeconds": 0,
    "paths": {
        "nm": "./node_modules",
        "app": "./app",
        "babel": "./node_modules/babel-standalone/babel",
        "es6": "./require/require-babel-plugin",
        "text": "./node_modules/text/text"
    },
    "shim" : {},
    "config": {
      "babel": {
        "presets": [ "es2015" ],
        "plugins": [ "transform-es2015-modules-amd" ]
      }
    }
  });
});
