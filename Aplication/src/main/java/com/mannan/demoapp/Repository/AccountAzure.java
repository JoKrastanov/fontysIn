package com.mannan.demoapp.Repository;

import com.mannan.demoapp.Model.Account;
import com.mannan.demoapp.Repository.Interfaces.IAccountRepository;
import org.springframework.stereotype.Repository;

import java.sql.*;

import java.util.ArrayList;
import java.util.List;

@Repository
public class AccountAzure implements IAccountRepository {

    String conn = "jdbc:sqlserver://piegroup1.database.windows.net:1433;" +
            "database=fontysin;" +
            "user=piegroup1_dboer@piegroup1;" +
            "password=!VraagaanFlip;" +
            "encrypt=true;" +
            "trustServerCertificate=false;" +
            "loginTimeout=30;";

    public AccountAzure(){

    }

    @Override
    public List<Account> getAccounts() {
        List<Account> accounts = new ArrayList<>();

        ResultSet resultSet = null;
        try(Connection cnn = DriverManager.getConnection(conn);
        Statement statement = cnn.createStatement();) {
            resultSet = statement.executeQuery("SELECT * FROM Account");
            while (resultSet.next()) {
                Account newAcc = new Account();
                newAcc.setId(resultSet.getLong(0));
                newAcc.setName(resultSet.getString(1));
                newAcc.setType(resultSet.getString(2));
                newAcc.setBio(resultSet.getString(3));
                newAcc.setPcn(resultSet.getInt(4));
                accounts.add(newAcc);
            }
            return accounts;
        } catch (SQLException throwables) {
            throwables.printStackTrace();
            return null;
        }
    }

    @Override
    public Account getAccount(long accountId) {
        ResultSet resultSet = null;
        try(Connection cnn = DriverManager.getConnection(conn);
            Statement statement = cnn.createStatement();) {
            resultSet = statement.executeQuery("SELECT * FROM Account WHERE ID = accountId");
            Account newAcc = new Account();
            while (resultSet.next()) {
                newAcc.setId(resultSet.getLong(0));
                newAcc.setName(resultSet.getString(1));
                newAcc.setType(resultSet.getString(2));
                newAcc.setBio(resultSet.getString(3));
                newAcc.setPcn(resultSet.getInt(4));
            }
            return newAcc;
        } catch (SQLException throwables) {
            throwables.printStackTrace();
            return null;
        }
    }

    @Override
    public Account getAccountByPcn(long pcn) {
        ResultSet resultSet = null;
        try(Connection cnn = DriverManager.getConnection(conn);
            Statement statement = cnn.createStatement();) {
            resultSet = statement.executeQuery("SELECT * FROM Account WHERE PCN = pcn");
            Account newAcc = new Account();
            while (resultSet.next()) {
                newAcc.setId(resultSet.getLong(0));
                newAcc.setName(resultSet.getString(1));
                newAcc.setType(resultSet.getString(2));
                newAcc.setBio(resultSet.getString(3));
                newAcc.setPcn(resultSet.getInt(4));
            }
            return newAcc;
        } catch (SQLException throwables) {
            throwables.printStackTrace();
            return null;
        }
    }

    @Override
    public boolean deleteAccount(long accountId) {
//        repo.deleteById(accountId);
        return true;
    }

    @Override
    public boolean addAccount(Account account) {
//        repo.save(account);
        return true;
    }

    @Override
    public boolean updateAccount(Account account) {
//        Account acc = getAccount(account.getId());
//        acc = account;
//        repo.save(account);
        return true;
    }
}
