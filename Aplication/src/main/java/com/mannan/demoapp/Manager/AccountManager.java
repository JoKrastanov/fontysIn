package com.mannan.demoapp.Manager;

import com.mannan.demoapp.Manager.Interfaces.IAccountManager;
import com.mannan.demoapp.Model.Account;
import com.mannan.demoapp.Repository.Interfaces.IDataClass;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class AccountManager implements IAccountManager {

    private IDataClass dataClass;

    public AccountManager(IDataClass dataClass){
        this.dataClass=dataClass;
    }


    @Override
    public List<Account> getAccounts() {
        return dataClass.getAccounts();
    }

    @Override
    public Account getAccount(long accountId) {
        return dataClass.getAccount(accountId);
    }

    @Override
    public boolean deleteAccount(long accountId) {
        return dataClass.deleteAccount(accountId);
    }

    @Override
    public boolean addAccount(Account account) {
        return dataClass.addAccount(account);
    }

    @Override
    public boolean updateAccount(Account account) {
        return dataClass.updateAccount(account);
    }


}
