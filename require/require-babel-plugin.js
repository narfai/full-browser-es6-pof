define({
  load: function(name, parentRequire, onload, config){
    function httpGetAsync(url, callback){
        var xhr = new XMLHttpRequest();
        xhr.responseType = 'text'; //Avoid browser parsing
        xhr.onreadystatechange = function() {
            if (xhr.readyState == 4 && xhr.status == 200) {
                callback(xhr.responseText);
            }
        }
        xhr.open("GET", url, true);
        xhr.send();
    }

    function getBabelConfiguration(_config){
      if(typeof _config.config === 'undefined' || typeof _config.config.babel === 'undefined'){
        return {
          "presets": [ "es2015" ],
          "plugins": [ "babel-plugin-transform-es2015-modules-amd" ]
        };
      } else {
        return _config.config.babel;
      }
    }

    parentRequire(['babel'], function(Babel){
      var url = parentRequire.toUrl(name) + '.es6';      
      httpGetAsync(url, function(raw){
        onload.fromText(Babel.transform(raw, getBabelConfiguration(config)).code);
      });
    });
  }
});
