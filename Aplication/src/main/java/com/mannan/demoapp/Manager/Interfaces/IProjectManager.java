package com.mannan.demoapp.Manager.Interfaces;

import com.mannan.demoapp.Model.Project;

import java.util.List;

public interface IProjectManager {

    List<Project> getAllProjectsPerAccount(long accId);
}
