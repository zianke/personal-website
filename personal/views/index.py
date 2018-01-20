"""Insta485 index view."""
import flask
import personal
import personal.model


@personal.app.route('/', methods=['GET', 'POST'])
def index():
    """Display / route."""
    context = {'active': 'index'}
    return flask.render_template("index.html", **context)
