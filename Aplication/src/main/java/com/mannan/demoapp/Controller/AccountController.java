package com.mannan.demoapp.Controller;


import com.mannan.demoapp.Manager.Interfaces.IAccountManager;
import com.mannan.demoapp.Model.Account;
import com.mannan.demoapp.Model.Interest;
import com.sun.tools.javac.util.Convert;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.util.List;
import java.util.Optional;

import static java.lang.Integer.parseInt;

@Controller
@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RequestMapping("/accounts")
public class AccountController {

    private IAccountManager accountManager;

    public AccountController(IAccountManager accountManager){
        this.accountManager=accountManager;
    }

    @GetMapping
    public ResponseEntity<List<Account>> getAllAccounts(){
        List<Account> accounts=accountManager.getAccounts();
        if (accounts!=null){
            return ResponseEntity.ok().body(accounts);
        }
        else {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping("{pcn}")
    public ResponseEntity<Account> getAccount(@PathVariable(value = "pcn") int pcn){
        Account account= accountManager.getAccountByPcn(pcn);
        if (account!=null){
            return ResponseEntity.ok().body(account);
        }
        else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("{id}")
    public ResponseEntity deleteAccount(@PathVariable int id)
    {
        accountManager.deleteAccount(id);
        return ResponseEntity.ok().build();
    }

    @PostMapping()
    public ResponseEntity<Account> createAccount(@RequestBody Account account){
        if (!accountManager.addAccount(account)){
            String entity= "Account with id" +account.getId()+ "already exists.";
            return new ResponseEntity(entity, HttpStatus.CONFLICT);
        }else{
            String url= "account" + "/" + account.getId();
            URI uri=URI.create(url);
            return new ResponseEntity(uri,HttpStatus.CREATED);
        }
    }

    @PutMapping
    public ResponseEntity<Account> updateAccount(@RequestBody Account account){
        if (accountManager.updateAccount(account)){
            return ResponseEntity.noContent().build();
        }
        else {
            return  new ResponseEntity("Please provide a valid id.",HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping("/Interest")
    public ResponseEntity<Interest> addInterest(@RequestParam int interestId, @RequestParam int accountId){
        if (accountManager.addInterest(interestId, accountId)){
            return ResponseEntity.ok().build();
        }
        return ResponseEntity.notFound().build();
    }

    @PostMapping("/bio")
    public ResponseEntity<Account> editBio(@RequestParam int accountId, @RequestParam String bio){
        if (accountManager.editBio(accountId, bio)){
            return ResponseEntity.ok().build();
        }
        return ResponseEntity.notFound().build();
    }
}
