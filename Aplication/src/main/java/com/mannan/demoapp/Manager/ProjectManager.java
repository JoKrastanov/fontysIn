package com.mannan.demoapp.Manager;

import com.mannan.demoapp.Interfaces.IProjectManager;
import com.mannan.demoapp.Model.Project;
import com.mannan.demoapp.Repository.Interfaces.IProjectAzure;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProjectManager implements IProjectManager {

    IProjectAzure dataClass;

    public ProjectManager(IProjectAzure dataClass) {this.dataClass = dataClass;}

    @Override
    public List<Project> getProjectsByPcn(Long pcn) {
        List<Project> projects = dataClass.findAllByPcn(pcn);
        Collections.reverse(projects);
        return projects;
    }

    @Override
    public Project getProject(Project project) {
        return dataClass.findProject(project);
    }

    @Override
    public boolean deleteProject(Project project) {
        return dataClass.delete(project);
    }

    @Override
    public boolean addProject(Project project) {
        return dataClass.create(project);
    }

    @Override
    public boolean updateProject(Project project) {
        return dataClass.update(project);
    }
}
