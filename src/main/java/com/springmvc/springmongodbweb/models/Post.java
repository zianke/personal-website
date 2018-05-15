package com.springmvc.springmongodbweb.models;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;


@Document(collection = "post")
public class Post {

    @Id
    public String id;

    public String cover;
    public String title;
    public String subtitle;
    public String content;
    public boolean isProject;

    public Post() {
    }

    public Post(String id, String cover, String title, String subtitle, String content, boolean isProject) {
        this.id = id;
        this.cover = cover;
        this.title = title;
        this.subtitle = subtitle;
        this.content = content;
        this.isProject = isProject;
    }

    @Override
    public String toString() {
        return String.format(
                "Post[id=%s]", id);
    }

}

