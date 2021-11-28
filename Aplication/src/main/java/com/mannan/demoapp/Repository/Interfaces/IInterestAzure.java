package com.mannan.demoapp.Repository.Interfaces;

import com.mannan.demoapp.Model.AccountPackage.Interest;

import java.util.List;

public interface IInterestAzure {
    List<Interest> findAllByPcn(Long pcn);
    boolean delete(Interest interest);
    boolean create(Interest interest);
}
