package com.mannan.demoapp.Repository;

import com.mannan.demoapp.Model.Account;
import com.mannan.demoapp.Repository.Interfaces.IDataClass;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;

@Repository
public class FakeDataClass implements IDataClass {

    private final List<Account> accountList=new ArrayList<>();

    public FakeDataClass(){
        accountList.add(new Account(1, 2323,"peter@gmail.com","peter123","student","I am a first year student at Fontys", null));
    }

    @Override
    public List<Account> getAccounts() {
        return accountList;
    }

    @Override
    public Account getAccount(long accountId) {
        for(Account account:accountList){
            if(account.getId()==accountId){
                    return account;
            }
        }
        return null;
    }

    @Override
    public boolean deleteAccount(long accountId) {
        Account account=getAccount(accountId);
        if (account==null){
            return false;
        }
        return accountList.remove(account);
    }

    @Override
    public boolean addAccount(Account account) {
        if (this.getAccount(account.getId())!=null){
            return false;
        }
        accountList.add(account);
        return true;
    }

    @Override
    public boolean updateAccount(Account account) {
        Account oldAccount=this.getAccount(account.getId());
        if (oldAccount==null){
            return false;
        }
        oldAccount.setPcn(account.getPcn());
        oldAccount.setEmail(account.getEmail());
        oldAccount.setPassword(account.getPassword());
        oldAccount.setAcademicType(account.getAcademicType());
        oldAccount.setBio(account.getBio());
        return true;
    }
}
