package com.example.spring1overforingobjekt;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class KundeController {
    @GetMapping("/")
    public Kunde returnKunde(Kunde innKunde){
        return innKunde;
    }
}
