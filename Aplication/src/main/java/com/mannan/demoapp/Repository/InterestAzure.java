package com.mannan.demoapp.Repository;

import com.mannan.demoapp.Model.Interest;
import com.mannan.demoapp.Repository.Interfaces.IInterestDataClass;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class InterestAzure implements IInterestDataClass {
    @Override
    public List<Interest> getAllInterests() {
        return null;
    }

    @Override
    public Boolean addInterest(Interest interest) {
        return null;
    }

    @Override
    public Interest getInterestById(int id) {
        return null;
    }
}
