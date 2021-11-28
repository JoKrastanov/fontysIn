package com.mannan.demoapp.Repository;

import com.mannan.demoapp.Model.AccountPackage.Account;
import com.mannan.demoapp.Model.AccountPackage.AccountRequest;
import com.mannan.demoapp.Repository.AzureConn.DefaultCon;
import com.mannan.demoapp.Repository.Interfaces.IAccountAzure;
import org.springframework.stereotype.Repository;

import java.sql.*;
import java.util.ArrayList;
import java.util.List;

@Repository
public class AccountAzure implements IAccountAzure {

    DefaultCon con = new DefaultCon();
    Connection connection = DriverManager.getConnection(con.getCon());
    Statement statement = connection.createStatement();

    public AccountAzure() throws SQLException {
    }

    @Override
    public List<Account> findAll() {
        try {
            List<Account> accounts = new ArrayList<>();
            String selectSql = "SELECT *  from Account";
            con.setResult(statement.executeQuery(selectSql));

            while (con.getResult().next()) {
                Account newAcc =
                        new Account(con.getResult().getLong(4),
                                con.getResult().getString(5),
                                con.getResult().getString(3),
                                con.getResult().getString(2));
                accounts.add(newAcc);
            }
            return accounts;
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return null;
    }

    @Override
    public Account findByPcn(Long pcn) {
        try {
            Account newAcc = null;
            PreparedStatement selectSql = connection.prepareStatement("SELECT * FROM Account WHERE PCN = ?");
            selectSql.setLong(1, pcn);
            ResultSet result = selectSql.executeQuery();
            while (result.next()) {
                newAcc = new Account(result.getLong(4),
                        result.getString(5),
                        result.getString(3),
                        result.getString(2));
            }
            return newAcc;
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return null;
    }

    @Override
    public boolean delete(Long pcn) {
        try {
            PreparedStatement selectSql = connection.prepareStatement("DELETE FROM Account WHERE PCN = ?");
            selectSql.setLong(1, pcn);
            selectSql.executeUpdate();
            return true;
        } catch (SQLException e) {
            e.printStackTrace();
            return false;
        }
    }

    @Override
    public boolean update(Account account) {
        try {
            PreparedStatement selectSql = connection.prepareStatement("UPDATE Account SET AcademicType = ?, Bio = ?, Name = ? WHERE PCN = ?");
            selectSql.setString(1, account.getType());
            selectSql.setString(2, account.getBio());
            selectSql.setString(3, account.getName());
            selectSql.setLong(4, account.getPcn());
            selectSql.executeUpdate();
            return true;
        } catch (SQLException e) {
            e.printStackTrace();
            return false;
        }
    }

    @Override
    public boolean create(Account account) {
        try {
            PreparedStatement selectSql = connection.prepareStatement("INSERT INTO Account (AcademicType, Bio, PCN, Name) VALUES (?,?,?,?)");
            selectSql.setString(1, account.getType());
            selectSql.setString(2, account.getBio());
            selectSql.setLong(3, account.getPcn());
            selectSql.setString(4, account.getName());
            selectSql.executeUpdate();
            return true;
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return false;
    }

    @Override
    public AccountRequest viewAccount(Long pcn, Long myPcn) {
        try {
            AccountRequest request = new AccountRequest();
            request.setPcn2(myPcn);
            PreparedStatement selectSql = connection.prepareStatement("select a.pcn, a.visibility from account as a\n" +
                    "where a.PCN = ?");
            selectSql.setLong(1, pcn);
            ResultSet result = selectSql.executeQuery();
            while (result.next()) {
                request.setPcn1(pcn);
                request.setVisibility(result.getInt(2));
            }

            PreparedStatement selectSql2 = connection.prepareStatement("select c.accepted from connection as c " +
                    "where (Pcn1 = ? OR Pcn1 = ?) AND (Pcn2 = ? OR Pcn2 = ?)");
            selectSql2.setLong(1, pcn);
            selectSql2.setLong(2, myPcn);
            selectSql2.setLong(3, pcn);
            selectSql2.setLong(4, myPcn);
            ResultSet result2 = selectSql2.executeQuery();
            if (!result2.next()) {
                request.setAccepted(0);
                return  request;
            }
                else {
                    request.setAccepted(result2.getInt(1));
                }

            return request;
        } catch (SQLException e) {
            e.printStackTrace();
            return null;
        }
    }
}

