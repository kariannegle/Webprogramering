// heltalls array liste
const liste = [1,3,5,2,7,-9];
liste[0]=10;

// for løkke
for (let i=0;i<liste.length;i++){
    console.log(liste[i]);
}

for(let i of liste){
    console.log(i);
}
// adde noe til arayet
liste.push(23);
const lengde = liste.length;
// slette elementer i array
liste.splice(1,2);
const posisjon = liste.indexOf(23);
liste.sort();

// skriv ut hele listen og får antall elementer
console.log(liste);
// skrive ut posisjon på element 23
console.log(posisjon);