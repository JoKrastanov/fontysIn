package com.mannan.demoapp.Repository.Interfaces;

import com.mannan.demoapp.Model.ChatPackage.Chat;
import com.mannan.demoapp.Model.ChatPackage.Message;

public interface IChatAzure {
    Chat getChatByPCNs(Long pcn1, Long pcn2);
    boolean create(Chat chat);
    boolean sendMessage(Message msg);
    boolean delete(Long id);
}
