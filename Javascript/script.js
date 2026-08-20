let nom = "AÏKOU";
let prenom= "Jean Apôtre";
let nombre1 = 12;
let nombre2 = 20;
let nombre3 = nombre1 + nombre2;
let age = nombre3;
let userAge = prompt("Quel est votre age ?", "mettez un nombre entier SVP");

console.log(nombre3);
console.log("Bonjour je m'appelle " + prenom + " " + nom + " je suis agé de " + age +" ans.");
console.log( "Votre age est " + userAge + " ans.")

if(userAge >= 1 && userAge <= 10){
    console.log("Vous êtes un enfant");
    alert("Vous êtes un enfant");
}else if (userAge>10 && userAge<= 17){
    console.log("Vous êtes un adolescent");
    alert("Vous êtes un adolescent")
}else if(userAge>17 && userAge<= 40){
    console.log("Vous êtes un adulte");
    alert("Vous êtes un adulte");
}else{
    console.log("Vous êtes sénior");
    alert("Vous êtes sénior");
}
