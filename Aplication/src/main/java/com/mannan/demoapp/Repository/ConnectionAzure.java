package com.mannan.demoapp.Repository;

import com.mannan.demoapp.Model.Connection;
import com.mannan.demoapp.Model.Experience;
import com.mannan.demoapp.Model.Project;
import com.mannan.demoapp.Repository.AzureConn.DefaultCon;
import com.mannan.demoapp.Repository.Interfaces.IConnectionAzure;
import org.springframework.stereotype.Repository;

import java.sql.*;
import java.util.ArrayList;
import java.util.List;

@Repository
public class ConnectionAzure implements IConnectionAzure {

    public ConnectionAzure() throws SQLException {}
    DefaultCon con = new DefaultCon();
    java.sql.Connection connection = DriverManager.getConnection(con.getCon());
    Statement statement = connection.createStatement();

    @Override
    public Connection findById(Long id) {
        try {
            PreparedStatement selectSql = connection.prepareStatement(
                    "select * from Connection where id = ?");
            selectSql.setLong(1, id);
            ResultSet result = selectSql.executeQuery();
            while(result.next())
            {
                return new Connection(result.getLong(1),result.getLong(2), result.getLong(3), result.getInt(4));
            }
        }
        catch (SQLException e) {e.printStackTrace();}
        return null;
    }

    @Override
    public List<Connection> findPendingByPcn(Long pcn) {
        try {
            List<Connection> connections = new ArrayList<>();
            PreparedStatement selectSql = connection.prepareStatement(
                    "select * from Connection where (Pcn1 = ? OR Pcn2 = ?) AND Accepted IS NULL");
            selectSql.setLong(1, pcn);
            selectSql.setLong(2, pcn);
            ResultSet result = selectSql.executeQuery();
            while(result.next())
            {
                connections.add(new Connection(result.getLong(1),result.getLong(2), result.getLong(3), result.getInt(4)));
            }
            return connections;
        }
        catch (SQLException e) {e.printStackTrace();}
        return null;
    }
    @Override
    public List<Connection> findAcceptedByPcn(Long pcn) {
        try {
            List<Connection> connections = new ArrayList<>();
            PreparedStatement selectSql = connection.prepareStatement(
                    "select * from Connection where (Pcn1 = ? OR Pcn2 = ?) AND Accepted = 1");
            selectSql.setLong(1, pcn);
            selectSql.setLong(2, pcn);
            ResultSet result = selectSql.executeQuery();
            while(result.next())
            {
                connections.add(new Connection(result.getLong(1),result.getLong(2), result.getLong(3), result.getInt(4)));
            }
            return connections;
        }
        catch (SQLException e) {e.printStackTrace();}
        return null;
    }

    @Override
    public boolean createConnection(Connection connect) {
        try {
            PreparedStatement selectSql = connection.prepareStatement("INSERT INTO Connection (Pcn1, Pcn2) VALUES (?,?)");
            selectSql.setLong(1, connect.getPcn1());
            selectSql.setLong(2, connect.getPcn2());
            selectSql.executeUpdate();
            return true;
        }
        catch (SQLException e) {e.printStackTrace();}
        return false;
    }

    @Override
    public boolean deleteConnection(Connection connect) {
        try {
            PreparedStatement selectSql = connection.prepareStatement("DELETE FROM Connection WHERE Id = ?");
            selectSql.setLong(1, connect.getId());
            selectSql.executeUpdate();
            return true;
        }
        catch (SQLException e) {e.printStackTrace();}
        return false;
    }

    @Override
    public boolean update(Connection connect) {
        try {
            connect.setAccepted(1);
            PreparedStatement selectSql = connection.prepareStatement("UPDATE [dbo].[Connection]" +
                    "SET" +
                    "    [Accepted] = ?" +
                    " where Id = ?");
            selectSql.setInt(1, connect.getAccepted());
            selectSql.setLong(2, connect.getId());
            selectSql.executeUpdate();
            return true;
        }
        catch (SQLException e) {e.printStackTrace();}
        return false;
    }
}
