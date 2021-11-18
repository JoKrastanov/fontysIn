package com.mannan.demoapp.Interfaces;

import com.mannan.demoapp.Model.Account;

import java.util.List;

public interface IAccountManager {
    List<Account> getAccounts();
    Account getAccountByPcn(Long pcn);
    boolean deleteAccount(Long pcn);
    boolean addAccount(Account acc);
    boolean updateAccount(Account acc);
    Account viewAccount(Long pcn, Long myPcn);
}
