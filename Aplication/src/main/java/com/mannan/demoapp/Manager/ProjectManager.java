package com.mannan.demoapp.Manager;


import com.mannan.demoapp.Manager.Interfaces.IProjectManager;
import com.mannan.demoapp.Model.Project;
import com.mannan.demoapp.Repository.Interfaces.IDataClass;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class ProjectManager implements IProjectManager {
    private IDataClass dataClass;

    public ProjectManager(IDataClass dataClass){
        this.dataClass=dataClass;
    }

    @Override
    public List<Project> getAllProjectsPerAccount(long accId){return this.dataClass.getAllProjectsPerAccount(accId);}
}
