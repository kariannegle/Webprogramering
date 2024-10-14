// function for å kjøpe og registrere billetter
function kjopBillett() {

    // forenklet document.getElementById med jQuery
    let billett = {
        film: $("#velgFilm").val(),
        antall: $("#antall").val(),
        fornavn: $("#fornavn").val(),
        etternavn: $("#etternavn").val(),
        telefonnr: $("#telefonnr").val(),
        epost: $("#epost").val()
    }

    // lagre billett i array
    $.post('/lagre', billett, function () {
        hentAlle();
    });

    // errorCount for å validere inputfelter og sende ut error melding hvis fel i input boks
    let errorCount = 0;
    // isNaN for at det ikke går ann å sende inn noe annet enn tall
    if (billett.antall === ""|| isNaN(billett.antall)){
        // hvis det ikke er skrevet noe inn i inputfelt
        $("#antall-error").text("Error, du har ikke fylt riktig inn antall")
        errorCount++
    }
    else{
        $("#antall-error").text("")
    }


    if (billett.fornavn === ""){
        $("#fornavn-error").text("Error, du må skrive inn fornavn")
        errorCount++
    }
    else{
        $("#fornavn-error").text("")
    }


    if (billett.etternavn === ""){
        $("#etternavn-error").text("Error, du må skrive inn etternavn")
        errorCount++
    }
    else{
        $("#etternavn-error").text("")
    }


    if (billett.telefonnr === ""){
        $("#telefonnr-error").text("Error, du må skrive inn telefonnummeret ditt")
        errorCount++
    }
    else{
        $("#telefonnr-error").text("")
    }


    if (billett.epost === ""){
        $("#epost-error").text("Error, du må skrive inn epost adressen din")
        errorCount++
    }
    else{
        $("#epost-error").text("")

    }

    if(errorCount === 0) {

        //blanker ut input-feltene etter "kjøp billett" er trykket på dersom det ikke er noen feil
        document.getElementById("antall").value="";
        document.getElementById("fornavn").value="";
        document.getElementById("etternavn").value="";
        document.getElementById("telefonnr").value="";
        document.getElementById("epost").value="";

        // kall på skrivUtBilletter funksjon
        skrivUtBilletter();
    }
}

// function for å hente inn data
function hentAlle() {
    $.get("/hentAlle", function(data) {
        skrivUtBilletter(data);
        // for å vise opprettede objekter i array på console log
        console.log(data)
    });
}

// function for å skrive ut kjøpte billetter
function skrivUtBilletter(billetter){
    let billettUt = "<table class='table table-bordered table-striped'><tr>"+ "<th> Film </th><th> Antall </th><th> Fornavn </th><th> Etternavn </th><th> Telefonnr </th><th> Epost </th><th>";
    for(let b of billetter){
        billettUt += "<tr>";
        billettUt += "<td>" + b.film + "</td><td>" + b.antall + "</td><td>" + b.fornavn + "</td><td>" + b.etternavn +"</td><td>" + b.telefonnr + "</td><td>" +  b.epost + "</td><td>";
        billettUt += "</tr>";
    }
    $("#skrivUtBilletter").html(billettUt);
}

// function for å tømme arrayliste og slette alle kjøpte billeter
function nullstill() {
    $.get( "/nullstill", function() {
        hentAlle();
    });
}