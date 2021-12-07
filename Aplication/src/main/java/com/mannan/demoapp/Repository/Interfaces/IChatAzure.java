package com.mannan.demoapp.Repository.Interfaces;

import com.mannan.demoapp.Model.ChatPackage.Chat;
import com.mannan.demoapp.Model.ChatPackage.Message;

import java.util.List;

public interface IChatAzure {
    Chat getChatByPCNs(Long pcn1, Long pcn2);
    List<Chat> getChatByPCN(Long pcn);
    boolean create(Chat chat);
    boolean sendMessage(Message msg);
    boolean delete(Long id);
}
