package com.mannan.demoapp.Repository;

import com.mannan.demoapp.Model.Interest;
import com.mannan.demoapp.Model.Project;
import com.mannan.demoapp.Repository.AzureConn.DefaultCon;
import com.mannan.demoapp.Repository.Interfaces.IAccountAzure;
import com.mannan.demoapp.Repository.Interfaces.IProjectAzure;
import org.springframework.stereotype.Repository;

import java.sql.*;
import java.util.ArrayList;
import java.util.List;

@Repository
public class ProjectAzure implements IProjectAzure {

    public ProjectAzure() throws SQLException {}
    DefaultCon con = new DefaultCon();
    Connection connection = DriverManager.getConnection(con.getCon());
    Statement statement = connection.createStatement();

    @Override
    public List<Project> findAllByPcn(Long pcn) {
        try {
            List<Project> projects = new ArrayList<>();
            PreparedStatement selectSql = connection.prepareStatement(
                    "select * from Project as i where i.[AccountPcn] = ?");
            selectSql.setLong(1, pcn);
            ResultSet result = selectSql.executeQuery();
            while(result.next())
            {
                projects.add(new Project(result.getLong(1),result.getString(2), result.getString(4), result.getString(3), result.getLong(5)));
            }
            return projects;
        }
        catch (SQLException e) {e.printStackTrace();}
        return null;
    }

    @Override
    public Project findProject(Project prj) {
       try {
           Project project = null;
           PreparedStatement selectSql = connection.prepareStatement("SELECT * from Project where accountpcn = ? AND Title like ?");
           selectSql.setLong(1, prj.getAccountPCN());
           selectSql.setString(2, prj.getTitle());

           ResultSet result = selectSql.executeQuery();
           while(result.next())
           {
               project = new Project(result.getLong(1), result.getString(2), result.getString(4), result.getString(3), result.getLong(5));
               return project;
           }

       }
       catch (SQLException e) {e.printStackTrace();}
       return null;
    }

    @Override
    public boolean create(Project project) {
        try {
            PreparedStatement selectSql = connection.prepareStatement("INSERT INTO Project (Title, Link, Description, AccountPcn) VALUES (?,?,?,?)");
            selectSql.setString(1, project.getTitle());
            selectSql.setString(2, project.getLink());
            selectSql.setString(3, project.getDescription());
            selectSql.setLong(4, project.getAccountPCN());
            selectSql.executeUpdate();
            return true;
        }
        catch (SQLException e) {e.printStackTrace();}
        return false;
    }

    @Override
    public boolean update(Project project) {
        try {
            PreparedStatement selectSql = connection.prepareStatement("UPDATE [dbo].[Project]" +
                    "SET" +
                    "    [Title] = ?," +
                    "    [Link] = ?," +
                    "    [Description] = ?," +
                    "    [AccountPcn] = ? " +
                    "WHERE Id = ?");
            selectSql.setString(1, project.getTitle());
            selectSql.setString(2, project.getLink());
            selectSql.setString(3, project.getDescription());
            selectSql.setLong(4, project.getAccountPCN());
            selectSql.setLong(5, project.getId());
            selectSql.executeUpdate();
            return true;
        }
        catch (SQLException e) {e.printStackTrace();}
        return false;
    }

    @Override
    public boolean delete(Project project) {
        try {
            PreparedStatement selectSql = connection.prepareStatement("DELETE FROM [dbo].[Project]" +
                    "WHERE Id = ? ");
            selectSql.setLong(1, project.getId());
            selectSql.executeUpdate();
            return true;
        }
        catch (SQLException e) {e.printStackTrace();}
        return false;
    }
}
