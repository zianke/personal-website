"""personal model (database) API."""
import os
import hashlib
import shutil
import tempfile
import sqlite3
import flask
import arrow
import personal


def dict_factory(cursor, row):
    """
    Convert database row objects to a dictionary.

    This is useful for building dictionaries which
    are then used to render a template. Note that
    this would be inefficient for large queries.
    """
    output = {}
    for idx, col in enumerate(cursor.description):
        output[col[0]] = row[idx]
    return output


def get_db():
    """Open a new database connection."""
    if not hasattr(flask.g, 'sqlite_db'):
        flask.g.sqlite_db = sqlite3.connect(
            personal.app.config['DATABASE_FILENAME'])
        flask.g.sqlite_db.row_factory = dict_factory

        # Foreign keys have to be enabled per-connection.  This is an sqlite3
        # backwards compatibility thing.
        flask.g.sqlite_db.execute("PRAGMA foreign_keys = ON")

    return flask.g.sqlite_db


@personal.app.teardown_appcontext
def close_db(error):
    # pylint: disable=unused-argument
    """Close the database at the end of a request."""
    if hasattr(flask.g, 'sqlite_db'):
        flask.g.sqlite_db.commit()
        flask.g.sqlite_db.close()


def expand_filename(filename):
    return '/uploads/' + filename


def get_post(uri):
    cur = get_db().execute("SELECT * FROM post WHERE uri='{}'".format(uri))
    post = cur.fetchone()
    cur = get_db().execute(
        "SELECT photo.* FROM photo_display, photo WHERE post_id = {} AND photo_display.photo_id=photo.photo_id".format(
            post['post_id']))
    post['photos'] = cur.fetchall()
    for photo in post['photos']:
        photo['filename'] = expand_filename(photo['filename'])
    cur = get_db().execute(
        "SELECT video.* FROM video_display,video WHERE post_id = {} AND video_display.video_id=video.video_id".format(
            post['post_id']))
    post['videos'] = cur.fetchall()
    for video in post['videos']:
        video['filename'] = expand_filename(video['filename'])
    post['paragraphs'] = str(post['text']).split('\n')
    cur.close()
    return post
