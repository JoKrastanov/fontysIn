package com.mannan.demoapp.Interfaces;

import com.mannan.demoapp.Model.Connection;

import java.util.List;

public interface IConnectionManager {
    Connection getConnectionById(Long id);
    List<Connection> getPendingConnections(Long pcn);
    List<Connection> getAcceptedConnections(Long pcn);
    boolean addConnection(Connection connection);
    boolean deleteConnection(Connection connection);
    boolean updateConnection(Connection connection);
}
