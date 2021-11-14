package com.mannan.demoapp.Repository.Interfaces;

import com.mannan.demoapp.Model.Account;
import com.mannan.demoapp.Model.Project;

import java.util.List;

public interface IAccountRepository {
     List<Account> getAccounts();
     Account getAccount(long accountId);
     Account getAccountByPcn(long pcn);
     boolean deleteAccount(long accountId);
     boolean addAccount(Account account);
     boolean updateAccount(Account account);

}
