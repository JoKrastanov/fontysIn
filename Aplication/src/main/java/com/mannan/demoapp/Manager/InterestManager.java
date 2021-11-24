package com.mannan.demoapp.Manager;

import com.mannan.demoapp.Interfaces.IInterestManager;
import com.mannan.demoapp.Model.Interest;
import com.mannan.demoapp.Repository.Interfaces.IInterestAzure;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.List;

@Service
public class InterestManager implements IInterestManager {

    private IInterestAzure dataClass;

    public InterestManager(IInterestAzure dataClass) {this.dataClass = dataClass;}

    @Override
    public List<Interest> getInterestsByPcn(Long pcn) {
        List<Interest> interests = dataClass.findAllByPcn(pcn);
        Collections.reverse(interests);
        return interests;

    }

    @Override
    public boolean addInterest(Interest interest) {
        return dataClass.create(interest);
    }

    @Override
    public boolean deleteInterest(Interest interest) {
        return dataClass.delete(interest);
    }

}
