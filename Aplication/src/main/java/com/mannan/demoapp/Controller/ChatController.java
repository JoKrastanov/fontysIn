package com.mannan.demoapp.Controller;

import com.mannan.demoapp.Interfaces.IChatManager;
import com.mannan.demoapp.Model.ChatPackage.Chat;
import com.mannan.demoapp.Model.ChatPackage.Message;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RequestMapping("/chat")
@AllArgsConstructor
public class ChatController {

    private IChatManager chatManager;

    //region Chat REST API Methods
    @GetMapping("{pcn1}/{pcn2}")
    public ResponseEntity<Chat> getChat(@PathVariable(value = "pcn1") Long pcn1, @PathVariable(value = "pcn2") Long pcn2) {
        Chat chat = chatManager.getChat(pcn1, pcn2);
        return ResponseEntity.ok().body(chat);
    }
    //endregion

    //region Message REST API Methods
    @PostMapping("/message")
    public ResponseEntity<Chat> sendMessage(@RequestBody Message message) {
        if (chatManager.sendMessage(message)) {
            return ResponseEntity.ok().build();
        }
        else {
            String content = "An error occurred please try again!";
            return new ResponseEntity(content, HttpStatus.BAD_REQUEST);
        }
    }

    @DeleteMapping("message/{id}")
    public ResponseEntity<Message> deleteMessage(@PathVariable Long id) {
        chatManager.deleteMessage(id);
        return ResponseEntity.ok().build();
    }
    //endregion

}
