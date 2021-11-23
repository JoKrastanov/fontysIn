package com.mannan.demoapp.Manager;

import com.mannan.demoapp.Interfaces.IExperienceManager;
import com.mannan.demoapp.Model.Experience;
import com.mannan.demoapp.Repository.Interfaces.IExperienceAzure;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.List;

@Service
public class ExperienceManager implements IExperienceManager {

    IExperienceAzure dataClass;

    public ExperienceManager(IExperienceAzure dataClass) {this.dataClass = dataClass;}

    @Override
    public List<Experience> getExperiencesByPcn(Long pcn) {
        List<Experience> experiences = dataClass.findAllByPcn(pcn);
        Collections.reverse(experiences);
        return experiences;
    }

    @Override
    public boolean addExperience(Experience experience) {
        return dataClass.create(experience);
    }

    @Override
    public boolean updateExperience(Experience experience) {
        return dataClass.update(experience);
    }

    @Override
    public boolean deleteExperience(Experience experience) {
        return dataClass.delete(experience);
    }
}
