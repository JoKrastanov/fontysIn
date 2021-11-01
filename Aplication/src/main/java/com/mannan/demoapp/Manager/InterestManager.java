package com.mannan.demoapp.Manager;

import com.mannan.demoapp.Manager.Interfaces.IInterestManager;
import com.mannan.demoapp.Model.Interest;
import com.mannan.demoapp.Repository.Interfaces.IInterestDataClass;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class InterestManager implements IInterestManager {

    private final IInterestDataClass interestDataClass;

    @Autowired
    public InterestManager(IInterestDataClass interestDataClass) {
        this.interestDataClass = interestDataClass;
    }

    @Override
    public List<Interest> getAllInterests() {
        return interestDataClass.getAllInterests();
    }

    @Override
    public Boolean addInterest(Interest interest) {
        interestDataClass.addInterest(interest);
        return true;
    }
}
