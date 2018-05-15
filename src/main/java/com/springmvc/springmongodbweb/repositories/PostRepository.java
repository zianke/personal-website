package com.springmvc.springmongodbweb.repositories;

        import com.springmvc.springmongodbweb.models.Post;
        import org.springframework.data.repository.CrudRepository;

public interface PostRepository extends CrudRepository<Post, String> {
    @Override
    Post findOne(String id);

    @Override
    void delete(Post deleted);
}