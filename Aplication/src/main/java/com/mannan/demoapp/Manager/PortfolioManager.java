package com.mannan.demoapp.Manager;

import com.mannan.demoapp.Manager.Interfaces.IPortfolioManager;
import com.mannan.demoapp.Model.Project;
import com.mannan.demoapp.Repository.Interfaces.IDataClass;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class PortfolioManager implements IPortfolioManager {

    private IDataClass dataClass;

    public PortfolioManager(IDataClass dataClass){
        this.dataClass=dataClass;
    }

    @Override
    public List<Project> getAllProjectsPerAccount(long accId) {
        return this.dataClass.getAllProjectsPerAccount(accId);
    }

    @Override
    public boolean addProject(long accId, Project project){
        this.dataClass.addProject(accId,project);
        return true;
    }
}
