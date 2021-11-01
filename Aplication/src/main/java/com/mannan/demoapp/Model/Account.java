package com.mannan.demoapp.Model;

import lombok.*;

import java.util.List;

@Getter @NoArgsConstructor @AllArgsConstructor @Setter
public class Account {
    private long id;
    private int pcn;
    private String email;
    private String password;
    private String academicType;
    private String bio;
    private List<Account> connections;
    //private Portfolio portfolio;

    //private List<Post> posts;
}
