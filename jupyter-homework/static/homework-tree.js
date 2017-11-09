define(function() {
  var load_homework_tree = function() {
    require(['base/js/utils','services/config'], function(utils,configmod) {
      var config = new configmod.ConfigSection('common',{base_url: utils.get_body_data("baseUrl")});
      config.load();
      
      config.loaded.then(function() {
        var nbgallery = config['data'].homework;
        var base = homework.url;
        console.log("loading homework-tree integration from " + base);
        require([base + "/integration/homework-tree.js"]);
    })
  };

  return {
    load_ipython_extension: load_homework_tree
  }
});
