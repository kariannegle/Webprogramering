package com.example.oblig3data1700;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController //dekoratør
public class BillettController {

    @Autowired
    BillettRepository rep;

    @PostMapping("/lagre")
    public void lagreBillett(Billett innBillett) {
        rep.lagreBillett(innBillett);
    }

    @GetMapping("/hentAlle")
    public List<Billett> hentAlle() {
        return rep.hentAlleBilletter();
    }

    // for å tømme arraylisten
    @GetMapping("/nullstill")
    public void nullstill() {
        rep.slettAlleBilletter();
    }
}
