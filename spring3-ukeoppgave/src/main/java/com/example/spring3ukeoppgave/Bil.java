package com.example.spring3ukeoppgave;

public class Bil {
    // det vi vet vi trenger og lagre av data
    private String merke;
    private String type;

    // konstruktør
    public Bil(String merke, String type) {
        // initialiserer datatypene her
        this.merke = merke;
        this.type = type;
    }

    // krav om å ha en tom konstruktør
    public Bil() {
    }

    // getter og setter metoder for datafeltene
    public String getMerke() {
        return merke;
    }

    public void setMerke(String merke) {
        this.merke = merke;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }
}
