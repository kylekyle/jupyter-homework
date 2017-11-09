define(function() {
  var homework_notebook_loaded = false;

  var load_homework_notebook = function() {
    require(['base/js/utils','services/config'], function(utils,configmod) {
      if (homework_notebook_loaded == false) {
        homework_notebook_loaded = true;

        // Load extensions hosted on the homework server
        var cconfig = new configmod.ConfigSection('common',{base_url: utils.get_body_data("baseUrl")});
        cconfig.load();
        cconfig.loaded.then(function() {
          if(!cconfig['data'].homework || !cconfig['data'].homework.url) {
            return;
          }
          var homework = cconfig['data'].homework;
          var base = homework.url;
          console.log("loading homework-notebook integration from " + base);

          require([base + "/integration/homework-notebook.js"], function() {
            Jupyter.notification_area.get_widget("notebook").set_message("Homework Integration Loaded", 1000);
          });
        });
      };
    })
  };

  var load_ipython_extension = function() {
    require(['base/js/events'], function(events) {
      // for some reason, we miss the notebook_loaded event for large notebooks
      // so the kernel hook is our safety
      events.on("kernel_ready.Kernel", load_gallery_notebook);
      events.on("notebook_loaded.Notebook", load_gallery_notebook);
    });
  };

  return {
    load_ipython_extension: load_ipython_extension
  }
});
