package com.mannan.demoapp.Controller;


import com.mannan.demoapp.Manager.Interfaces.IProjectManager;
import com.mannan.demoapp.Model.Project;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@Controller
@RestController
@RequestMapping("/accounts/projects")
public class ProjectController {

    @Autowired
    private IProjectManager projectManager;

    public ProjectController(IProjectManager projectManager){
        this.projectManager=projectManager;

    }

    @GetMapping("{id}")
    public ResponseEntity<List<Project>> getAllProjectsPerAccount(@PathVariable(value = "id") int id){
        List<Project> projects=projectManager.getAllProjectsPerAccount(id);
        if (projects!=null){
            return ResponseEntity.ok().body(projects);
        }else {
            return ResponseEntity.notFound().build();
        }
    }
}
