package com.mannan.demoapp.Model;

import lombok.*;

import java.beans.PropertyEditor;
import java.util.List;

@Getter
@NoArgsConstructor
@AllArgsConstructor
@Setter
public class Portfolio {
    private List<Interest> interests;
    private List<Skill> skills;
    private List<Experience> experiences;
    private List<Project> projects;

    public void addProject(Project project){
        this.projects.add(project);
    }
}
