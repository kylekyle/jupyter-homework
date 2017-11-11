# Jupyter Homework Extension

This extension helps students to submit homework to a server for grading. It adds a "Homework" menu to every notebook. 

# Installation

Install and enable _jupyter-homework_ on your Jupyter instance:

```bash
pip install jupyter-homework -U
jupyter nbextension install --py jupyter-homework
jupyter nbextension enable jupyter-homework --py 
```

_jupyter-homework_ ships with [_nbopen_](https://github.com/takluyver/nbopen) which lets students double-click .ipynb to open them. Do the following to enable file association on your platform:

* Linux/BSD: `python3 -m nbopen.install_xdg`
* Windows: `python3 -m nbopen.install_win`
* Mac: Clone the repository and run `./osx-install.sh`

# Development

Check out this repo on your Jupyter install, install from source, and enable it

```bash
# cd into the directory you checked out this project
pip install -e .
jupyter nbextension install --py jupyter-homework
jupyter nbextension enable jupyter-homework --py 
```

# Deploying

Register at https://pypi.org/ and save your credentials to `~/.pypirc`:

```
[pypi]
username:<username>
password:<password>
```

Create the distribution: 

```
python setup.py sdist
```

Use twine to upload:

```
twine upload dist/*
```

Tag and push:

```
git tag <tag>
git push origin <tag>
```
