"""Insta485 index view."""
import flask
import personal
import personal.model


@personal.app.route('/blog/p/', methods=['GET', 'POST'])
def posts():
    """Display / route."""
    context = {}
    context['posts'] = personal.model.get_posts()
    context['active'] = 'blog'
    return flask.render_template("posts.html", **context)
