CREATE TABLE user (
  username VARCHAR(20)  NOT NULL,
  fullname VARCHAR(40)  NOT NULL,
  email    VARCHAR(40)  NOT NULL,
  filename VARCHAR(128) NOT NULL,
  password VARCHAR(256) NOT NULL,
  created  TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
  PRIMARY KEY (username)
);

CREATE TABLE post (
  post_id    INTEGER        NOT NULL,
  is_project INTEGER        NOT NULL,
  title      VARCHAR(128)   NOT NULL,
  text       VARCHAR(32768) NOT NULL,
  uri        VARCHAR(128)   NOT NULL,
  created    TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
  PRIMARY KEY (post_id),
  UNIQUE (uri)
);

CREATE TABLE photo (
  photo_id INTEGER      NOT NULL,
  filename VARCHAR(128) NOT NULL,
  created  TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
  PRIMARY KEY (photo_id)
);

CREATE TABLE photo_display (
  post_id  INTEGER NOT NULL,
  photo_id INTEGER NOT NULL,
  PRIMARY KEY (post_id, photo_id),
  FOREIGN KEY (post_id) REFERENCES post (post_id)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  FOREIGN KEY (photo_id) REFERENCES photo (photo_id)
    ON DELETE CASCADE
    ON UPDATE CASCADE
);

CREATE TABLE video (
  video_id INTEGER      NOT NULL,
  filename VARCHAR(128) NOT NULL,
  created  TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
  PRIMARY KEY (video_id)
);

CREATE TABLE video_display (
  post_id  INTEGER NOT NULL,
  video_id INTEGER NOT NULL,
  PRIMARY KEY (post_id, video_id),
  FOREIGN KEY (post_id) REFERENCES post (post_id)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  FOREIGN KEY (video_id) REFERENCES video (video_id)
    ON DELETE CASCADE
    ON UPDATE CASCADE
);

CREATE TABLE album (
  album_id INTEGER      NOT NULL,
  cover    VARCHAR(128) NOT NULL,
  created  TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL
);

CREATE TABLE album_photo (
  album_id INTEGER NOT NULL,
  photo_id INTEGER NOT NULL,
  PRIMARY KEY (album_id, photo_id),
  FOREIGN KEY (album_id) REFERENCES album (album_id)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  FOREIGN KEY (photo_id) REFERENCES photo (photo_id)
    ON DELETE CASCADE
    ON UPDATE CASCADE
);

CREATE TABLE comment (
  comment_id INTEGER       NOT NULL,
  owner      VARCHAR(20)   NOT NULL,
  post_id    INTEGER       NOT NULL,
  text       VARCHAR(1024) NOT NULL,
  created    TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
  PRIMARY KEY (comment_id),
  FOREIGN KEY (owner) REFERENCES user (username)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  FOREIGN KEY (post_id) REFERENCES post (post_id)
    ON DELETE CASCADE
    ON UPDATE CASCADE
);

CREATE TABLE like (
  owner   VARCHAR(20) NOT NULL,
  post_id INTEGER     NOT NULL,
  created TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
  PRIMARY KEY (owner, post_id),
  FOREIGN KEY (owner) REFERENCES user (username)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  FOREIGN KEY (post_id) REFERENCES post (post_id)
    ON DELETE CASCADE
    ON UPDATE CASCADE
);