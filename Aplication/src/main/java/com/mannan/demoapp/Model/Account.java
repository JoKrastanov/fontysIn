package com.mannan.demoapp.Model;

import lombok.*;

import java.util.List;

@Getter @NoArgsConstructor @AllArgsConstructor @Setter
public class Account {
    private long id;
    private int pcn;
    private String name;
    private String bio;
    private int type; //1 for student and 2 for teacher
    private List<Account> connections;
    private List<Interest> interests;
    private List<Skill> skills;
    private Portfolio portfolio;

    //private List<Post> posts;
}
