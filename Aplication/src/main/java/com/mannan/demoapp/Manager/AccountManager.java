package com.mannan.demoapp.Manager;

import com.mannan.demoapp.Interfaces.IAccountManager;
import com.mannan.demoapp.Model.Account;
import com.mannan.demoapp.Model.AccountRequest;
import com.mannan.demoapp.Repository.Interfaces.IAccountAzure;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class AccountManager implements IAccountManager {

    private IAccountAzure dataClass;

    public AccountManager(IAccountAzure dataClass){
        this.dataClass=dataClass;
    }


    @Override
    public List<Account> getAccounts() {
        return dataClass.findAll();
    }

    @Override
    public Account getAccountByPcn(Long pcn) {
        return dataClass.findByPcn(pcn);
    }

    @Override
    public boolean deleteAccount(Long pcn) {
        return dataClass.delete(pcn);
    }

    @Override
    public boolean addAccount(Account account) {
        return dataClass.create(account);
    }

    @Override
    public boolean updateAccount(Account account) {
        return dataClass.update(account);
    }

    @Override
    public Account viewAccount(Long pcn, Long myPcn) {
        AccountRequest request = dataClass.viewAccount(pcn, myPcn);
        if (request != null)
        {
            if (request.getVisibility() == 0) {return null;}
            else if (request.getVisibility() == 1 && request.getAccepted() == 1)
            {
                return getAccountByPcn(request.getPcn1());
            }
            else if (request.getVisibility() == 2)
            {
                return getAccountByPcn(request.getPcn1());
            }

        }
        System.out.println(request.getVisibility() + "  " + request.getAccepted());
        return null;
    }
}
