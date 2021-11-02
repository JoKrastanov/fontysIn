package com.mannan.demoapp.Controller;

import com.mannan.demoapp.Manager.Interfaces.IInterestManager;
import com.mannan.demoapp.Model.Interest;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RequestMapping("/interest")
public class InterestController {
    IInterestManager interestManager;
    public InterestController(IInterestManager interestManager){
        this.interestManager = interestManager;
    }

    @GetMapping()
    public ResponseEntity<List<Interest>> getInterests(){
        return ResponseEntity.ok().body(interestManager.getAllInterests());
    }

    @PostMapping
    public ResponseEntity<Interest> addInterest(@RequestBody Interest interest){
        if (interestManager.addInterest(interest)){
            return ResponseEntity.ok().build();
        }
        return ResponseEntity.badRequest().build();
    }
}
