package com.mannan.demoapp.Manager;

import com.mannan.demoapp.Interfaces.IConnectionManager;
import com.mannan.demoapp.Model.AccountPackage.Connection;
import com.mannan.demoapp.Repository.Interfaces.IConnectionAzure;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ConnectionManager implements IConnectionManager {

    IConnectionAzure dataClass;

    public ConnectionManager(IConnectionAzure dataClass) {this.dataClass = dataClass;}

    @Override
    public Connection getConnectionByPCNs(Long pcn1, Long pcn2) {
        return dataClass.findByPCNs(pcn1, pcn2);
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
        Connection checkConnection = getConnectionByPCNs(connection.getPcn1(), connection.getPcn2());
        if (checkConnection == null) {
            return dataClass.createConnection(connection);
        }
        else {return false;}
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
