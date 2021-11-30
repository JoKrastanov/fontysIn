package com.mannan.demoapp.Repository.Interfaces;

import com.mannan.demoapp.Model.PostPackage.Post;

import java.util.List;

public interface IPostAzure {
    boolean create(Post post);
    Post getPostById(Long id);
    List<Post> getAccountPostsByPcn(Long pcn);
    boolean delete(Long id);
}
