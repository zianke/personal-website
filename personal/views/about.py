"""Insta485 index view."""
import flask
import personal
import personal.model


@personal.app.route('/about/')
def about():
    """Display / route."""
    context = {}
    context['active'] = 'about'
    return flask.render_template("about.html", **context)
