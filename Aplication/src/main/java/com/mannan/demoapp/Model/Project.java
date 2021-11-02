package com.mannan.demoapp.Model;

import lombok.*;

@Getter
@NoArgsConstructor
@AllArgsConstructor
@Setter
public class Project {
    private long id;
    private String title;
    private String description;
    private String link;
    //private var uploadedProject;
}
