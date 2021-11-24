package com.mannan.demoapp.Manager;

import com.mannan.demoapp.Interfaces.ISkillManager;
import com.mannan.demoapp.Model.Skill;
import com.mannan.demoapp.Repository.Interfaces.ISkillAzure;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.List;

@Service
public class SkillManager implements ISkillManager {

    ISkillAzure dataClass;
    public SkillManager(ISkillAzure dataClass) {this.dataClass = dataClass;}

    @Override
    public List<Skill> getSkillsByPcn(Long pcn) {
         List<Skill> skills = dataClass.findAllByPcn(pcn);
        Collections.reverse(skills);
        return skills;

    }

    @Override
    public boolean addSkill(Skill skill) {
        return dataClass.create(skill);
    }

    @Override
    public boolean deleteSkill(Skill skill) {
        return dataClass.delete(skill);
    }

    @Override
    public boolean updateSkill(Skill skill) {
        return dataClass.update(skill);
    }
}
