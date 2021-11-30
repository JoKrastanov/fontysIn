package com.mannan.demoapp.Manager;

import com.mannan.demoapp.Interfaces.IChatManager;
import com.mannan.demoapp.Model.ChatPackage.Chat;
import com.mannan.demoapp.Model.ChatPackage.Message;
import com.mannan.demoapp.Repository.Interfaces.IChatAzure;
import org.springframework.stereotype.Service;

@Service
public class ChatManager implements IChatManager {

    private IChatAzure dataClass;

    public ChatManager(IChatAzure dataClass) {this.dataClass = dataClass;}

    public boolean createChat(Long pcn1, Long pcn2) {
        return dataClass.create(new Chat(pcn1, pcn2));
    }

    @Override
    public Chat getChat(Long pcn1, Long pcn2) {
        Chat chat = dataClass.getChatByPCNs(pcn1, pcn2);
        if (chat == null) {
            Chat newChat = new Chat(pcn1, pcn2);
            if (dataClass.create(newChat))
            {return newChat;}
        }
        return chat;
    }

    @Override
    public boolean sendMessage(Message msg) {
        return dataClass.sendMessage(msg);
    }

    @Override
    public boolean deleteMessage(Long id) {
        return dataClass.delete(id);
    }

}