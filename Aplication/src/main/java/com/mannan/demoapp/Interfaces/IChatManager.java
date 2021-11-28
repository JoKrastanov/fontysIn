package com.mannan.demoapp.Interfaces;

import com.mannan.demoapp.Model.ChatPackage.Chat;
import com.mannan.demoapp.Model.ChatPackage.Message;

public interface IChatManager {
    Chat getChat(Long pcn1, Long pcn2);
    boolean sendMessage(Message msg);
    boolean deleteMessage(Long id);
}
