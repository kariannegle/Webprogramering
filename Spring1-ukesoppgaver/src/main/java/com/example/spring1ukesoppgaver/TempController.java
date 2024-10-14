package com.example.spring1ukesoppgaver;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TempController {

    // På server skal det ligge et array med tolv temperaturer (én for hver måned).
    // opprette array
    private final Integer[] tempArray = new Integer[]{-3,-2,2,7,12,16,18,17,12,7,3,-2};

    @GetMapping("/temp")
    public int getTemp(String month) {

        // en switch for å "oversette" månedsnavn til array-indeks.
        // Kan også bruke vanlig switch eller if/elseif/else
        int temp = switch (month.toLowerCase()) {
            case "januar" -> tempArray[0];
            case "februar" -> tempArray[1];
            case "mars" -> tempArray[2];
            case "april" -> tempArray[3];
            case "mai" -> tempArray[4];
            case "juni" -> tempArray[5];
            case "juli" -> tempArray[6];
            case "august" -> tempArray[7];
            case "september" -> tempArray[8];
            case "oktober" -> tempArray[9];
            case "november" -> tempArray[10];
            case "desember" -> tempArray[11];
            default -> 0;
        };

        return temp;
    }
}
