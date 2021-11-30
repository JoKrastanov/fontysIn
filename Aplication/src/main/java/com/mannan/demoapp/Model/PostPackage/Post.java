package com.mannan.demoapp.Model.PostPackage;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter @Setter @AllArgsConstructor @NoArgsConstructor
public class Post {
    private Long id;
    private String title;
    private String description;
    private Long accountPCN;

    public Post(String title, String description, Long accountPCN) {
        this.title = title;
        this.description = description;
        this.accountPCN = accountPCN;
    }
}
