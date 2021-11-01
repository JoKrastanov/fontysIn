package com.mannan.demoapp.Manager.Interfaces;

import com.mannan.demoapp.Model.Interest;

import java.util.List;

public interface IInterestManager {
    List<Interest> getAllInterests();
    Boolean addInterest(Interest interest);
}
