package com.mannan.demoapp.Interfaces;

import com.mannan.demoapp.Model.Experience;

import java.util.List;

public interface IExperienceManager {
    List<Experience> getExperiencesByPcn(Long pcn);
    boolean addExperience(Experience experience);
    boolean updateExperience(Experience experience);
    boolean deleteExperience(Experience experience);
}
