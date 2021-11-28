package com.mannan.demoapp.Repository;

import com.mannan.demoapp.Model.ChatPackage.Chat;
import com.mannan.demoapp.Model.ChatPackage.Message;
import com.mannan.demoapp.Repository.AzureConn.DefaultCon;
import com.mannan.demoapp.Repository.Interfaces.IChatAzure;
import org.springframework.stereotype.Repository;

import java.sql.*;
import java.util.ArrayList;
import java.util.List;

@Repository
public class ChatAzure implements IChatAzure {

    DefaultCon con = new DefaultCon();
    Connection connection = DriverManager.getConnection(con.getCon());
    Statement statement = connection.createStatement();

    public ChatAzure() throws SQLException {
    }

    @Override
    public Chat getChatByPCNs(Long pcn1, Long pcn2) {
        try {
            Chat chat;
            PreparedStatement selectSql = connection.prepareStatement("Select * from Chat " +
                    "where (PCN1 = ? AND PCN2 = ?) OR (PCN1 = ? AND PCN2 = ?)");
            selectSql.setLong(1, pcn1);
            selectSql.setLong(2, pcn2);
            selectSql.setLong(3, pcn2);
            selectSql.setLong(4, pcn1);
            ResultSet result = selectSql.executeQuery();
            while (result.next()) {
                chat = new Chat(result.getLong(1), result.getLong(2), result.getLong(3), new ArrayList<>());
                chat.loadMessages(getChatMessages(chat.getId()));
                return chat;
            }
        }
        catch (SQLException e) {e.printStackTrace();}
        return null;
    }

    @Override
    public boolean create(Chat chat) {
        try {
            PreparedStatement selectSql = connection.prepareStatement("INSERT INTO Chat " +
                    "(PCN1, PCN2) " +
                    "VALUES (? , ?)");
            selectSql.setLong(1, chat.getPcn1());
            selectSql.setLong(2, chat.getPcn2());
            selectSql.executeUpdate();
            return true;
        }
        catch (SQLException e) {e.printStackTrace();}
        return false;
    }

    @Override
    public boolean sendMessage(Message msg) {
            try {
                if (getChatById(msg.getChatId())) {
                    PreparedStatement selectSql = connection.prepareStatement("Insert into Message " +
                            "(ChatId, SenderPCN, Message) " +
                            "VALUES (?, ?, ?)");
                    selectSql.setLong(1, msg.getChatId());
                    selectSql.setLong(2, msg.getSenderPCN());
                    selectSql.setString(3, msg.getMessage());
                    selectSql.executeUpdate();
                    return true;
                }
            } catch (SQLException e) {
                e.printStackTrace();
            }
        return false;
    }

    @Override
    public boolean delete(Long id) {
        try {
            PreparedStatement selectSql = connection.prepareStatement("Delete from Message " +
                    "where id = ?");
            selectSql.setLong(1, id);
            selectSql.executeUpdate();
            return true;
        }
        catch (SQLException e) {e.printStackTrace();}
        return false;
    }

    private List<Message> getChatMessages(Long id) {
        try {
            List<Message> messages = new ArrayList<>();
            PreparedStatement selectSql = connection.prepareStatement("select * from message " +
                    "where chatId = ?");
            selectSql.setLong(1, id);
            ResultSet result = selectSql.executeQuery();
            while (result.next()) {
                messages.add(new Message(result.getLong(1), result.getLong(2), result.getLong(3), result.getString(4)));
            }
            return messages;
        }
        catch (SQLException e) {e.printStackTrace();}
        return null;
    }
    private boolean getChatById(Long id) {
        int rows = 0;
        try {
            PreparedStatement selectSql = connection.prepareStatement("Select * From Chat " +
                    "Where id = ?");
            selectSql.setLong(1, id);
            ResultSet result = selectSql.executeQuery();
            while (result.next()) {rows++;}
        }
        catch (SQLException e) {e.printStackTrace();}
        if (rows > 0) {return true;}
        return false;
    }

}
