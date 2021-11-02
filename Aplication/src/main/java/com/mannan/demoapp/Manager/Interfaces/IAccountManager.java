package com.mannan.demoapp.Manager.Interfaces;

import com.mannan.demoapp.Model.Account;
import com.mannan.demoapp.Model.Interest;

import java.util.List;

public interface IAccountManager {
    List<Account> getAccounts();
    Account getAccount(long accountId);
    Account getAccountByPcn(long pcn);
    boolean deleteAccount(long accountId);
    boolean addAccount(Account account);
    boolean updateAccount(Account account);
    boolean addInterest(int interestId, int accountId);
    boolean editBio(int accountId, String bio);
}
