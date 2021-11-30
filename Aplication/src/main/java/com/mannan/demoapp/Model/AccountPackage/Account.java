package com.mannan.demoapp.Model.AccountPackage;

import lombok.*;

@Getter @NoArgsConstructor @AllArgsConstructor @Setter
public class Account {
    private Long pcn;
    private String name;
    private String bio;
    private String type;

}