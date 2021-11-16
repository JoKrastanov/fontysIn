package com.mannan.demoapp.Repository.Interfaces;

import com.mannan.demoapp.Model.Experience;

import java.util.List;

public interface IExperienceAzure {
    List<Experience> findAllByPcn(Long pcn);
    boolean create(Experience experience);
    boolean update(Experience experience);
    boolean delete(Experience experience);
}
