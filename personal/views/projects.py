"""Insta485 index view."""
import flask
import personal
import personal.model


@personal.app.route('/projects/', methods=['GET', 'POST'])
def projects():
    """Display / route."""
    context = {}
    context['posts'] = personal.model.get_projects()
    context['active'] = 'projects'
    return flask.render_template("projects.html", **context)
