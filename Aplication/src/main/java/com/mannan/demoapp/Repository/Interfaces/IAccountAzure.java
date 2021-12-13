package com.mannan.demoapp.Repository.Interfaces;

import com.mannan.demoapp.Model.AccountPackage.Account;
import com.mannan.demoapp.Model.AccountPackage.AccountRequest;

import java.util.List;

public interface IAccountAzure {
    List<Account> findAll();
    Account findByPcn(Long pcn);
    boolean update(Account acc);
    boolean updatePicture(Account acc);
    boolean create(Account acc);
    boolean delete(Long id);
    AccountRequest viewAccount(Long pcn, Long myPcn);
}
