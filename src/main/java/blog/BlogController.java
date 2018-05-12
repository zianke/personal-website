package blog;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.ArrayList;
import java.util.List;

@Controller
public class BlogController {

    @GetMapping("/")
    public String index(Model model) {
        return "index";
    }

    @GetMapping("/biography")
    public String biography(Model model) {
        return "biography";
    }

    @GetMapping("/projects")
    public String projects(@RequestParam(name = "title", required = false) String title, Model model) {
        model.addAttribute("title", title);
        List<Post> posts = new ArrayList<>();
        posts.add(new Post("cssa-apps", "CSSA APPs", "eb24ddc481f04ac4ee9c92d14d988fa148b319901df62e733d7e899f8cf2847d.jpg", "content content content content content content content"));
        posts.add(new Post("cssa-apps", "CSSA APPs", "eb24ddc481f04ac4ee9c92d14d988fa148b319901df62e733d7e899f8cf2847d.jpg", "content content content content content content content"));
        model.addAttribute("posts", posts);
        return "projects";
    }

    @GetMapping("/blog")
    public String blog(@RequestParam(name = "title", required = false) String title, Model model) {
        model.addAttribute("title", title);
        List<Post> posts = new ArrayList<>();
        posts.add(new Post("cssa-apps", "CSSA APPs", "eb24ddc481f04ac4ee9c92d14d988fa148b319901df62e733d7e899f8cf2847d.jpg", "content content content content content content content"));
        posts.add(new Post("cssa-apps", "CSSA APPs", "eb24ddc481f04ac4ee9c92d14d988fa148b319901df62e733d7e899f8cf2847d.jpg", "content content content content content content content"));
        model.addAttribute("posts", posts);
        return "blog";
    }
//    @GetMapping("/greeting")
//    public String greeting(@RequestParam(name="name", required=false, defaultValue="World") String name, Model model) {
//        model.addAttribute("name", name);
//        return "greeting";
//    }

}

class Post {
    public String uri;
    public String title;
    public String img;
    public String content;

    public Post(String uri, String title, String img, String content) {
        this.uri = uri;
        this.title = title;
        this.img = img;
        this.content = content;
    }
}