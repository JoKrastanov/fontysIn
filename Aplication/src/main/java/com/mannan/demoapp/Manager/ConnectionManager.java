package com.mannan.demoapp.Manager;

import com.mannan.demoapp.Interfaces.IConnectionManager;
import com.mannan.demoapp.Model.Connection;
import com.mannan.demoapp.Repository.Interfaces.IConnectionAzure;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ConnectionManager implements IConnectionManager {

    IConnectionAzure dataClass;

    public ConnectionManager(IConnectionAzure dataClass) {this.dataClass = dataClass;}

    @Override
    public Connection getConnectionById(Long id) {
        return dataClass.findById(id);
    }

    @Override
    public List<Connection> getPendingConnections(Long pcn) {
        return dataClass.findPendingByPcn(pcn);
    }

    @Override
    public List<Connection> getAcceptedConnections(Long pcn) {
        return dataClass.findAcceptedByPcn(pcn);
    }

    @Override
    public boolean addConnection(Connection connection) {
        return dataClass.createConnection(connection);
    }

    @Override
    public boolean deleteConnection(Connection connection) {
        return dataClass.deleteConnection(connection);
    }

    @Override
    public boolean updateConnection(Connection connection) {
        return dataClass.update(connection);
    }
}
