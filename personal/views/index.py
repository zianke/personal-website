"""Insta485 index view."""
import flask
import personal
import personal.model


@personal.app.route('/')
def index():
    """Display / route."""
    context = {'active': 'index'}
    return flask.render_template("index.html", **context)
