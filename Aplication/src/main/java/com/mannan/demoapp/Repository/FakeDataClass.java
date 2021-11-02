package com.mannan.demoapp.Repository;

import com.mannan.demoapp.Model.Account;
import com.mannan.demoapp.Model.Interest;
import com.mannan.demoapp.Model.Portfolio;
import com.mannan.demoapp.Model.Project;
import com.mannan.demoapp.Repository.Interfaces.IDataClass;
import com.mannan.demoapp.Repository.Interfaces.IInterestDataClass;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;

@Repository
public class FakeDataClass implements IDataClass, IInterestDataClass {

    private final List<Account> accountList=new ArrayList<>();
    private List<Interest> interests = new ArrayList<>();

    public FakeDataClass(){
        List<Interest> interests2 = new ArrayList<>(); //make a new list for account to prevent it also changing with interests list
        interests2.add(new Interest(1, "Frond-End"));
        interests.add(new Interest(1, "Frond-End"));
        Portfolio portfolio = new Portfolio(new ArrayList<Project>());
        portfolio.addProject(new Project(1, "Linux", "I'd just like to interject for a moment. What you're referring to as Linux, is in fact, GNU/Linux, or as I've recently taken to calling it, GNU plus Linux. Linux is not an operating system unto itself, but rather another free component of a fully functioning GNU system made useful by the GNU corelibs, shell utilities and vital system components comprising a full OS as defined by POSIX.", "www.Linux.org"));
        portfolio.addProject(new Project(2, "Hacking the pantagon", "\"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco", "www.boo.com"));
        accountList.add(new Account(1, 2323,"Joe","I am a first year student at Fontys",1,null,interests2, null, portfolio));
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
    public Account getAccountByPcn(long pcn) {
        for(Account account:accountList){
            if(account.getPcn()==pcn){
                return account;
            }
        }
        return null;
    }

    @Override
    public void addProject(long accId,Project project){
        for (Account account:accountList){
            if (account.getId()==accId){
                Portfolio portfolio=account.getPortfolio();
                if (portfolio!=null){
                    portfolio.addProject(project);
                }
            }
        }
    }
    @Override
    public List<Project> getAllProjectsPerAccount(long accId){
        for(Account account:accountList){
            if(account.getId()==accId){
                Portfolio portfolio=account.getPortfolio();
                if (portfolio!=null){
                    if(portfolio.getProjects()!=null){
                        return portfolio.getProjects();
                    }
                }
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
        for (int i = 0; i < accountList.size(); i++) {
            if (accountList.get(i).getId() == account.getId()){
                accountList.set(i, account);
                return true;
            }
        }
        return false;
    }

    @Override
    public List<Interest> getAllInterests() {
        return interests;
    }

    @Override
    public Boolean addInterest(Interest interest) {
        interests.add(interest);
        return true;
    }

    @Override
    public Interest getInterestById(int id) {
        for (int i = 0; i < interests.size(); i++) {
            if (interests.get(i).getId() == id){
                return interests.get(i);
            }
        }
        return null;
    }
}
