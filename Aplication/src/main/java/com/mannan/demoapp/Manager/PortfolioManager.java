package com.mannan.demoapp.Manager;

import com.mannan.demoapp.Manager.Interfaces.IPortfolioManager;
import com.mannan.demoapp.Model.Project;
import com.mannan.demoapp.Repository.Interfaces.IAccountRepository;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class PortfolioManager implements IPortfolioManager {

    private IAccountRepository dataClass;

    public PortfolioManager(IAccountRepository dataClass){
        this.dataClass=dataClass;
    }

    @Override
    public List<Project> getAllProjectsPerAccount(long accId) {
//        return this.dataClass.getAllProjectsPerAccount(accId);
        return null;
    }

    @Override
    public boolean addProject(long accId, Project project){
//        this.dataClass.addProject(accId,project);
        return true;
    }
}
