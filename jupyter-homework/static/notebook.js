define(function() {
  return {
    load_ipython_extension: function() {
      require(['nbextensions/jupyter-homework/common'], function(homework) {
        homework.attach_menu(function(menu, trigger_hook) {
          var title = $('<a/>')
            .text('Homework')
            .attr('href','#')
            .addClass('dropdown-toggle')
            .attr('data-toggle', 'dropdown');

          var dropdown = $('<li/>')
            .addClass('dropdown')
            .append(title)
            .append(menu);

          $('.navbar-nav').append(dropdown);

          // we need to signal we're done so the server
          // integration script doesn't start mucking with 
          // the menu until its totally built
          trigger_hook('notebook');
        });
      });
    }
  };
});
