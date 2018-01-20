"""Insta485 file view."""
import flask
import personal
import personal.model


@personal.app.route('/uploads/<path:filename>')
def file(filename):
    """Display /uploads/<path:filename> route."""
    print(personal.app.config['UPLOAD_FOLDER'])
    return flask.send_from_directory(
        personal.app.config['UPLOAD_FOLDER'], filename)
