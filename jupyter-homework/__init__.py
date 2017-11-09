def _jupyter_nbextension_paths():  # pragma: no cover
    return [
      {
        'section': "notebook",
        'src': "static",
        'dest': "jupyter-homework",
        'require': 'jupyter-homework/homework-notebook'
      },{
        'section': "tree",
        'src': "static",
        'dest': "jupyter-homework",
        'require': 'jupyter-nbgallery/homework-tree'
      },{
        'section': "common",
        'src': "static",
        'dest': "jupyter-homework",
        'require': 'jupyter-homework/homework-common'
      }
    ]
