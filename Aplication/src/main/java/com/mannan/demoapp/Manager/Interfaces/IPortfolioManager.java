package com.mannan.demoapp.Manager.Interfaces;

import com.mannan.demoapp.Model.Project;

import java.util.List;

public interface IPortfolioManager {


    List<Project> getAllProjectsPerAccount(long accId);
    boolean addProject(long accId, Project project);
}
