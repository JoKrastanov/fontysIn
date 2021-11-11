package com.mannan.demoapp.Repository;
import java.sql.*;

public class SqlConnClass {

        private String connectionUrl =
                "jdbc:sqlserver://piegroup1.database.windows.net:1433;"
                        + "database=fontysin;"
                        + "user=piegroup1_dboer@piegroup1;"
                        + "password=!VraagaanFlip;"
                        + "encrypt=true;"
                        + "trustServerCertificate=false;"
                        + "hostNameInCertificate=*.database.windows.net;"
                        + "loginTimeout=30;";

        private ResultSet resultSet = null;

        public SqlConnClass(){}

        public void tryConnection()
        {
            try {
                Connection connection = DriverManager.getConnection(connectionUrl);
                 Statement statement = connection.createStatement();

                // Create and execute a SELECT SQL statement.
                String selectSql = "SELECT *  from Account";
                resultSet = statement.executeQuery(selectSql);

                // Print results from select statement
                while (resultSet.next()) {
                    System.out.println(resultSet.getString(2) + " " + resultSet.getString(3));
                }
            }
            catch (SQLException e) {
                e.printStackTrace();
            }
        }


}
