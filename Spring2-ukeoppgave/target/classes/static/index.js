function regMotorvogn() {
    const motorvogn = {
        personnr : $("#personnr").val(),
        navn : $("#navn").val(),
        adresse : $("#adresse").val(),
        kjennetegn : $("#kjennetegn").val(),
        merke : $("#merke").val(),
        type : $("#type").val()
    };

    $.post("/lagre", motorvogn, function (){
        hentAlle();
    });
    // for å nullstille alle input felter
    $("#personnr").val("");
    $("#navn").val("");
    $("#adresse").val("");
    $("#kjennetegn").val("");
    $("#merke").val("");
    $("#type").val("");
}

// funksjon for å hente alle data og returnere det
function hentAlle() {
    $.get("/hentAlle", function (biler) {
        formaterData(biler);
    })
}

// hvordan dataene skal se ut når det skrives ut
function formaterData(biler) {
    // let variabel siden det kan forandres, formatert i en tabell
    let ut = "<table><tr><th>Personnr</th><th>Navn</th><th>Adresse</th>" +
        "<th>Kjennetegn</th><th>Merke</th><th>Type</th></tr>";
    // tar for oss en bil og skriver ut alle info ved den bilen
    for (const bil of biler) {
        ut += "<tr><td>" + bil.personnr + "</td><td>" + bil.navn + "</td><td>" + bil.adresse + "</td>" +
            "<td>" + bil.kjennetegn + "</td><td>" + bil.merke + "</td><td>" + bil.type + "</td></tr>";
    }
    ut += "</table>";
    // skriver ut på nettsiden
    $("#bilene").html(ut);
}

// funksjon for å slette all data
function slettAlle() {
    $.get( "/slettAlle", function() {
        hentAlle();
    });
}