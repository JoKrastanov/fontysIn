package com.mannan.demoapp.Controller;


import com.mannan.demoapp.Manager.Interfaces.IPortfolioManager;
import com.mannan.demoapp.Model.Project;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.util.List;

@Controller
@RestController
@RequestMapping("/accounts/projects")
public class ProjectController {

    @Autowired
    private IPortfolioManager portfolioManager;

    public ProjectController(IPortfolioManager portfolioManager){
        this.portfolioManager=portfolioManager;

    }

    @GetMapping("{id}")
    public ResponseEntity<List<Project>> getAllProjectsPerAccount(@PathVariable(value = "id") int id){
        List<Project> projects=portfolioManager.getAllProjectsPerAccount(id);
        if (projects!=null){
            return ResponseEntity.ok().body(projects);
        }else {
            return ResponseEntity.notFound().build();
        }
    }

    @PostMapping("{id}")
    public ResponseEntity<Project> addProject(@PathVariable(value = "id") long id, @RequestBody Project project){
        if (!portfolioManager.addProject(id,project)){
            String entity =  "Project with id " + project.getId() + " already exists.";
            return new ResponseEntity(entity, HttpStatus.CONFLICT);
        }else{
            String url = "project" + "/" + project.getId();
            URI uri = URI.create(url);
            return new ResponseEntity(uri,HttpStatus.CREATED);
        }
    }
}
