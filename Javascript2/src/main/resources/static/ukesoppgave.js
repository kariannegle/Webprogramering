function visPersonRegister(){
    // personregister array liste []
    let personRegister = [];

    // person objekter
    const person1 = {
        navn : "Line Jensen",
        adresse : "Askerveien 82",
        telefon : 12334455
    };

    const person2 = {
        navn : "Ole Hansen",
        adresse : "Osloveien 82",
        telefon : 99887766
    };

    const person3 = {
        navn : "Per Halvorsen",
        adresse : "Mariaveien 82",
        telefon : 56473829
    }

    const person4 = {
        navn : "Anna Marie",
        adresse : "Elloveien 82",
        telefon : 22113344
    }

    // pushe personene inn i array liste
    personRegister.push(person1);
    personRegister.push(person2);
    personRegister.push(person3);
    personRegister.push(person4);

    // skrive ut
    let ut = "<table><tr>" +
        "<th>Navn</th><th>Adresse</th><th>Telefon</th>" +
        "</tr>";

    for (let p of personRegister){
        ut+="<tr>";
        ut+="<td>"+p.navn+"</td><td>"+p.adresse+"</td><td>"+p.telefon+"</td>";
        ut+="<tr>";
    }
    document.getElementById("personRegister").innerHTML=ut;

}




