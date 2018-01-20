"""Insta485 index view."""
import flask
import personal
import personal.model


@personal.app.route('/blog/p/<uri>/', methods=['GET', 'POST'])
def post(uri):
    """Display / route."""
    context = personal.model.get_post(uri)
    context['active'] = 'blog'
    return flask.render_template("post.html", **context)
