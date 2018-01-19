"""Insta485 file view."""
import flask
import insta485
import insta485.model


@insta485.app.route(insta485.app.config['APPLICATION_ROOT'] + 'uploads/<path:filename>')
def file(filename):
    """Display /uploads/<path:filename> route."""
    return flask.send_from_directory(
        insta485.app.config['UPLOAD_FOLDER'], filename)
