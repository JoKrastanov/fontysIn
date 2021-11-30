package com.mannan.demoapp.Manager;

import com.mannan.demoapp.Interfaces.IPostManager;
import com.mannan.demoapp.Model.PostPackage.Post;
import com.mannan.demoapp.Repository.Interfaces.IPostAzure;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

@Service
public class PostManager implements IPostManager {

    IPostAzure dataClass;

    public PostManager(IPostAzure dataClass) {this.dataClass = dataClass;}

    @Override
    public boolean createPost(Post post) {
        return dataClass.create(post);
    }

    @Override
    public Post getPost(Long id) {
        return dataClass.getPostById(id);
    }

    @Override
    public List<Post> getAccountPosts(Long pcn) {
        List<Post> posts = dataClass.getAccountPostsByPcn(pcn);
        Collections.reverse(posts);
        return posts;
    }

    @Override
    public boolean deletePost(Long id) {
        return dataClass.delete(id);
    }
}
