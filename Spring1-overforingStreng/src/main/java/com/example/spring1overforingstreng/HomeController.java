package com.example.spring1overforingstreng;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HomeController {
    @GetMapping("/")
    public String hei(String navn){
        return "Hei verden "+navn;
    }
}
