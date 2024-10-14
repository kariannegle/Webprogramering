package com.example.spring2ukeoppgave;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
public class MotorvognController {

    public final List<Motorvogn> motorvognsRegister = new ArrayList<>();

    // tar inn en motorvogn for så å adde den inn i arrayet
    @PostMapping("/lagre")
    public void lagreKunde(Motorvogn bil){
        motorvognsRegister.add(bil);
    }

    // returnerer alle motorvogner, arrayet type list
    @GetMapping("/hentAlle")
    public List<Motorvogn> hentAlle(){
        return motorvognsRegister;
    }

    @GetMapping("/slettAlle")
    public void slettAlle(){
        motorvognsRegister.clear();
    }
}
