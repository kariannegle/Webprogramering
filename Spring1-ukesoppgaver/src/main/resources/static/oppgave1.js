$("#temp").click(function temp(){
    let month = document.getElementById("month").value;

    let url = "temp?month=" + month;

    //Henter temperatur fra serveren ved å bruke jquery
    $.get(url, function(data){
        let temp = "Temperaturen i " + month.toLowerCase() + " er " + data + " grader C.";

        $("#result").html(temp);
    })

});