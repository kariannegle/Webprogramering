const kunde1 = {
    // variabel navn : verdien til den variabelen
    navn : "Per Hansen",
    adresse : "Osloveien 82"
};

const kunde2 = {
    // variabel navn : verdien til den variabelen
    navn : "Line",
    adresse : "Akerveien 2"
};

// kunde array
let kundene = [];
// pushe kunde objekt inn i array liste
kundene.push(kunde1);
kundene.push(kunde2);

// for løkke for å skrive ut
for (let i=0;i<kundene.length;i++){
    console.log(kundene[i].navn+" "+kundene[i].adresse)
}

// kan også skrive ut med dette
for(let kunde of kundene){
    console.log(kunde.navn+" "+kunde.adresse);
}