define(function() {
  var load_homework_common = function() {
    require(['base/js/utils','services/config'], function(utils,configmod) {
      var config = new configmod.ConfigSection('common',{base_url: utils.get_body_data("baseUrl")});
      config.load();
      
      config.loaded.then(function() {
        var homework = config['data'].homework;
        var base = homework.url;
        console.log("loading jupyter-homework integration from " + base);
        require([base + "/integration/homework-common.js"]);
      });
    })
  };

  return {
    load_ipython_extension: load_homework_common
  }
});
