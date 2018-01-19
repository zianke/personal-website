"""Insta485 index view."""
import flask
import insta485
import insta485.model


@insta485.app.route('/')
def root():
    """Display / route."""
    return '<h1>Root</h1>'
