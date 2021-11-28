package com.mannan.demoapp.Repository.Interfaces;

import com.mannan.demoapp.Model.AccountPackage.Project;

import java.util.List;

public interface IProjectAzure {
    List<Project> findAllByPcn(Long pcn);
    Project findProject(Project project);
    boolean create(Project project);
    boolean update(Project project);
    boolean delete(Project project);
}
