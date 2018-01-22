"""Insta485 index view."""
import flask
import personal
import personal.model


@personal.app.route('/projects/<uri>/', methods=['GET', 'POST'])
def project(uri):
    """Display / route."""
    context = personal.model.get_project(uri)
    if not context:
        flask.abort(404)
    context['active'] = 'project'
    return flask.render_template("post.html", **context)
