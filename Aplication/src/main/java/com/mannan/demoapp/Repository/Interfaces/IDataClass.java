package com.mannan.demoapp.Repository.Interfaces;

import com.mannan.demoapp.Model.Account;

import java.util.List;

public interface IDataClass {
    public List<Account> getAccounts();
    public Account getAccount(long accountId);
    public boolean deleteAccount(long accountId);
    public boolean addAccount(Account account);
    public boolean updateAccount(Account account);
}
