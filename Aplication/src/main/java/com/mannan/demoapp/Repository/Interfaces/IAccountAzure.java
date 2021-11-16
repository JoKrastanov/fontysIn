package com.mannan.demoapp.Repository.Interfaces;

import com.mannan.demoapp.Model.Account;

import java.util.List;

public interface IAccountAzure {
    List<Account> findAll();
    Account findByPcn(Long pcn);
    boolean update(Account acc);
    boolean create(Account acc);
    boolean delete(Long id);
}