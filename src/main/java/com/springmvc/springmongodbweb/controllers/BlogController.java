package com.springmvc.springmongodbweb.controllers;

import com.springmvc.springmongodbweb.models.Post;
import com.springmvc.springmongodbweb.repositories.PostRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.ArrayList;
import java.util.List;

@Controller
public class BlogController {

    @Autowired
    PostRepository postRepository;

    @GetMapping("/")
    public String index(Model model) {
        List<Post> projects = new ArrayList<>();
        List<Post> blog = new ArrayList<>();
        for (Post post : postRepository.findAll()) {
            if (post.isProject) {
                projects.add(post);
            } else {
                blog.add(post);
            }
        }
        model.addAttribute("projects", projects);
        model.addAttribute("blog", blog);
        return "index";
    }

    @RequestMapping("/save")
    public String save() {
        postRepository.save(new Post("cssa-apps", "eb24ddc481f04ac4ee9c92d14d988fa148b319901df62e733d7e899f8cf2847d.jpg", "CSSA APPs", "Keywords: React, Redux, And Design, Flask, SQLite, Nginx, Azure", "cssa-apps", true));
        return "blog";
    }

    @GetMapping("/biography")
    public String biography(Model model) {
        return "biography";
    }

    @GetMapping("/projects")
    public String projects(@RequestParam(name = "title", required = false) String title, Model model) {
        try {
            Post post = postRepository.findOne(title);
            if (!post.isProject) {
                throw new Exception();
            }
            model.addAttribute("title", post.title);
            model.addAttribute("content", post.content);
        } catch (Exception e) {
            model.addAttribute("title", "");
            model.addAttribute("content", "");
        }
        List<Post> posts = new ArrayList<>();
        for (Post post : postRepository.findAll()) {
            if (post.isProject) {
                posts.add(post);
            }
        }
        model.addAttribute("posts", posts);
        return "projects";
    }

    @GetMapping("/blog")
    public String blog(@RequestParam(name = "title", required = false) String title, Model model) {
        try {
            Post post = postRepository.findOne(title);
            if (post.isProject) {
                throw new Exception();
            }
            model.addAttribute("title", post.title);
            model.addAttribute("content", post.content);
        } catch (Exception e) {
            model.addAttribute("title", "");
            model.addAttribute("content", "");
        }
        List<Post> posts = new ArrayList<>();
        for (Post post : postRepository.findAll()) {
            if (!post.isProject) {
                posts.add(post);
            }
        }
        model.addAttribute("posts", posts);
        return "blog";
    }
}
