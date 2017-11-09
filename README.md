# Jupyter Homework Extension

This extension helps students to submit homework to a server for grading. It adds a "Homework" menu to every notebook. 

# Installation

Install and enable _jupyter-homework_ on your Jupyter instance:

```bash
pip install jupyter-homework -U
jupyter nbextension install --py jupyter-homework
jupyter nbextension enable jupyter-homework --py 
```
# Development

Check out this repo on your Jupyter install, install from source, and enable it

```bash
# cd into the directory you checked out this project
pip install -e .
jupyter nbextension install --py jupyter-homework
jupyter nbextension enable jupyter-homework --py 
```

# Deploying

A good walkthrough for deploying to PyPi can be found here: http://peterdowns.com/posts/first-time-with-pypi.html
