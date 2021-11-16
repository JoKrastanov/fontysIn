package com.mannan.demoapp.Repository.Interfaces;

import com.mannan.demoapp.Model.Skill;

import java.util.List;

public interface ISkillAzure {
    List<Skill> findAllByPcn(Long pcn);
    boolean create(Skill skill);
    boolean update(Skill skill);
    boolean delete(Skill skill);
}
