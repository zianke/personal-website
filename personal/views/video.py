"""Insta485 index view."""
import flask
import personal
import personal.model


@personal.app.route('/blog/v/<int:video_id>/', methods=['GET', 'POST'])
def video(video_id):
    """Display / route."""
    context = {}
    context = personal.model.get_video(video_id)
    if not context:
        flask.abort(404)
    context['active'] = 'blog'
    return flask.render_template("video.html", **context)
