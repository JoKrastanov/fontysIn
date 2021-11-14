package com.mannan.demoapp.Manager;

import com.mannan.demoapp.Manager.Interfaces.IAccountManager;
import com.mannan.demoapp.Model.Account;
import com.mannan.demoapp.Model.Interest;
import com.mannan.demoapp.Repository.Interfaces.IAccountRepository;
import com.mannan.demoapp.Repository.Interfaces.IInterestDataClass;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class AccountManager implements IAccountManager {

    private IAccountRepository dataClass;
    private IInterestDataClass interestDataClass;

    public AccountManager(IAccountRepository dataClass){
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
    public Account getAccountByPcn(long pcn) {
        return dataClass.getAccountByPcn(pcn);
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

    @Override
    public boolean addInterest(int interestId, int accountId) {
        Interest interest = interestDataClass.getInterestById(interestId);
        if (interest != null){
            Account account = dataClass.getAccount(accountId);
            List<Interest> interests = account.getInterests();
            interests.add(interest);
            account.setInterests(interests);
            dataClass.updateAccount(account);
            return true;
        }
        return false;
    }

    @Override
    public boolean editBio(int accountId, String bio) {
        Account account = dataClass.getAccount(accountId);
        if (account != null){
            account.setBio(bio);
            dataClass.updateAccount(account);
            return true;
        }
        return false;
    }


}
