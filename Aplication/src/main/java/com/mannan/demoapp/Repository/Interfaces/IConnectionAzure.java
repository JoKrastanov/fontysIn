package com.mannan.demoapp.Repository.Interfaces;

import com.mannan.demoapp.Model.Connection;

import java.util.List;

public interface IConnectionAzure {
    Connection findById(Long id);
    List<Connection> findPendingByPcn(Long pcn);
    List<Connection> findAcceptedByPcn(Long pcn);
    boolean createConnection(Connection connect);
    boolean deleteConnection(Connection connect);
    boolean update(Connection connection);
}
