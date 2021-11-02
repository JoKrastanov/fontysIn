package com.mannan.demoapp.Repository.Interfaces;

import com.mannan.demoapp.Model.Interest;

import java.util.List;

public interface IInterestDataClass {
    List<Interest> getAllInterests();
    Boolean addInterest(Interest interest);
    Interest getInterestById(int id);
}
